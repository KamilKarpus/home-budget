import { IncomeAddedDomainEvent } from "../../hb.core.domain/events";
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { IBudgetShortViewService } from "../contracts/budget.short.view.interface";
import { Inject } from "@nestjs/common";

const ShortViewService = () => Inject('BudgetShortViewService');  

@EventsHandler(IncomeAddedDomainEvent)
export class IncomeAddedDomainEventHandler implements IEventHandler<IncomeAddedDomainEvent>
{

    constructor(@ShortViewService() private readonly service : IBudgetShortViewService){}

    async handle(event: IncomeAddedDomainEvent) {
        const view = await this.service.loadById(event.getBudgetId());
        if(view){
            view.TotalIncome = event.getTotalIncome().getValue();
            view.Currency = event.getTotalIncome().getCurrency();
            view.Total = event.getTotal().getValue();
            await this.service.update(view);
        }

    }

}