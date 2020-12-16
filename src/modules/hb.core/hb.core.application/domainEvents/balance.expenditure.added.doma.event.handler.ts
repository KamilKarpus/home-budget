import { Inject } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { Guid } from "guid-typescript";
import { ExpenditureAddedDomainEvent, IncomeAddedDomainEvent } from "../../hb.core.domain/events";
import { IBudgetShortViewService } from "../contracts/budget.short.view.interface";

const ShortViewService = () => Inject('BudgetShortViewService');  

@EventsHandler(ExpenditureAddedDomainEvent)
export class ExpenditureAddedDomainEventHandler implements IEventHandler<ExpenditureAddedDomainEvent>
{

    constructor(@ShortViewService() private readonly service : IBudgetShortViewService){}

    async handle(event: ExpenditureAddedDomainEvent) {
        const view = await this.service.loadById(Guid.parse(event.budgetId));
        if(view){
            view.applyExpenditure(event);
            await this.service.update(view);
        }

    }

}