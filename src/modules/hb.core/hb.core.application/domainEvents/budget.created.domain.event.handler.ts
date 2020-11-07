import { BalanceCreatedDomainEvent } from "../../hb.core.domain/events";
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { BudgetShortView } from "../read.models/budget.short.view";
import { Inject } from "@nestjs/common";
import { IBudgetShortViewService } from "../contracts/budget.short.view.interface";

const ShortViewService = () => Inject('BudgetShortViewService');  

@EventsHandler(BalanceCreatedDomainEvent)
export class BudgetCreatedDomainEventHandler implements IEventHandler<BalanceCreatedDomainEvent>
{

    constructor(@ShortViewService() private readonly service : IBudgetShortViewService){}

    async handle(event: BalanceCreatedDomainEvent) {
        const view = new BudgetShortView(event.getBalanceId(), 0,0,"", event.getBalanceName());
        await this.service.commitView(view);
    }

}