import { Inject } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
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
       const history = new BudgetHistoryView(event.getChangeId(),new MoneyView(event.getChange().getValue(), event.getChange().getCurrency()),
       ChangeType.Expenditure.getId(), event.getReason(), event.getBudgetId(), event.getDate());

       await this.service.add(history);
    }

}