import { Inject } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { Guid } from "guid-typescript";
import { ChangeType } from "../../hb.core.domain/change.type";
import { ExpenditureAddedDomainEvent } from "../../hb.core.domain/events";
import { IHistoryService } from "../contracts/history.service.interface";
import { BudgetHistoryView } from "../read.models/budget.history.view";
import { MoneyView } from "../read.models/money.view";

const HistoryService = () => Inject('HistoryService');  

@EventsHandler(ExpenditureAddedDomainEvent)
export class HistoryExpenditureAddedDomainEventHandler implements IEventHandler<ExpenditureAddedDomainEvent>
{
    
    constructor(@HistoryService() private service : IHistoryService){}

    async handle(event: ExpenditureAddedDomainEvent) {
        const history = await this.service.findByBalanceId(Guid.parse(event.budgetId));
        history.applyExpenditure(event);
        await this.service.update(history);
    }

}