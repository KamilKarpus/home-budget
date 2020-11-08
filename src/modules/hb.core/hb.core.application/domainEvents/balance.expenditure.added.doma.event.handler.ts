import { Inject } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { ExpenditureAddedDomainEvent, IncomeAddedDomainEvent } from "../../hb.core.domain/events";
import { IBudgetShortViewService } from "../contracts/budget.short.view.interface";

const ShortViewService = () => Inject('BudgetShortViewService');  

@EventsHandler(ExpenditureAddedDomainEvent)
export class ExpenditureAddedDomainEventHandler implements IEventHandler<ExpenditureAddedDomainEvent>
{

    constructor(@ShortViewService() private readonly service : IBudgetShortViewService){}

    async handle(event: ExpenditureAddedDomainEvent) {
        const view = await this.service.loadById(event.getBudgetId());
        if(view){
            view.TotalExpenditure = event.getTotalExpenditure().getValue();
            view.Currency = event.getTotalExpenditure().getCurrency();
            view.Total = event.getTotal().getValue();
            await this.service.update(view);
        }

    }

}