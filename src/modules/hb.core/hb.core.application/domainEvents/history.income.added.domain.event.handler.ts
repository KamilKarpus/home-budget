import { Inject } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { Guid } from "guid-typescript";
import { ChangeType } from "../../hb.core.domain/change.type";
import { IncomeAddedDomainEvent } from "../../hb.core.domain/events";
import { IHistoryService } from "../contracts/history.service.interface";
import { BudgetHistoryView } from "../read.models/budget.history.view";
import { MoneyView } from "../read.models/money.view";

const HistoryService = () => Inject('HistoryService');  

@EventsHandler(IncomeAddedDomainEvent)
export class HistoryIncomeAddedDomainEventHandler implements IEventHandler<IncomeAddedDomainEvent>
{
    
    constructor(@HistoryService() private service : IHistoryService){}

    async handle(event: IncomeAddedDomainEvent) {
        const history = await this.service.findByBalanceId(Guid.parse(event.budgetId));
        history.applyIncome(event);
        await this.service.update(history);
    }

}