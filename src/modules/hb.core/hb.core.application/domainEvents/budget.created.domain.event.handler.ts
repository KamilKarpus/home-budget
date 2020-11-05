import { BalanceCreatedDomainEvent } from "../../hb.core.domain/events";
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { BudgetShortViewService } from "../../hb.core.infrastructure/services/budget.short.view.service";
import { BudgetShortView } from "../read.models/budget.short.view";

@EventsHandler(BalanceCreatedDomainEvent)
export class BudgetCreatedDomainEventHandler implements IEventHandler<BalanceCreatedDomainEvent>
{

    constructor(private service : BudgetShortViewService){}

    async handle(event: BalanceCreatedDomainEvent) {
        const view = new BudgetShortView(event.getBalanceId(), 0,0,"", event.getBalanceName());
        await this.service.commitView(view);
    }

}