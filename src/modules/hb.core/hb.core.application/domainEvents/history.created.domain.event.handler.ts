import { Inject } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { SSL_OP_CIPHER_SERVER_PREFERENCE } from "constants";
import { ChangeType } from "../../hb.core.domain/change.type";
import { BalanceCreatedDomainEvent } from "../../hb.core.domain/events";
import { IHistoryService } from "../contracts/history.service.interface";
import { BudgetHistoryView } from "../read.models/budget.history.view";
import { HistoryView } from "../read.models/history.view";
import { MoneyView } from "../read.models/money.view";

const HistoryService = () => Inject('HistoryService');  

@EventsHandler(BalanceCreatedDomainEvent)
export class HistoryCreatedDomainEventHandler implements IEventHandler<BalanceCreatedDomainEvent>
{
    
    constructor(@HistoryService() private service : IHistoryService){}

    async handle(event: BalanceCreatedDomainEvent) {
        const history = [];
        history.push(new BudgetHistoryView(event.getHistoryId(),
            new MoneyView(0, ""), ChangeType.Created.getId(), "", event.getDate()
        ));
        const historyToAdd = new HistoryView(event.getBalanceId(), history);
        await this.service.addHistory(historyToAdd);
    }

}