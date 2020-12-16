import { IncomeAddedDomainEvent } from "../../hb.core.domain/events";
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { IBudgetShortViewService } from "../contracts/budget.short.view.interface";
import { Inject } from "@nestjs/common";
import { Guid } from "guid-typescript";

const ShortViewService = () => Inject('BudgetShortViewService');  

@EventsHandler(IncomeAddedDomainEvent)
export class IncomeAddedDomainEventHandler implements IEventHandler<IncomeAddedDomainEvent>
{

    constructor(@ShortViewService() private readonly service : IBudgetShortViewService){}

    async handle(event: IncomeAddedDomainEvent) {
        const view = await this.service.loadById(Guid.parse(event.budgetId));
        if(view){
            view.applyIncome(event);
            await this.service.update(view);
        }

    }

}