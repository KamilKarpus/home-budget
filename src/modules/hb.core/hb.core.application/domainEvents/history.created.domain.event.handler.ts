import { Inject } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { BalanceCreatedDomainEvent } from "../../hb.core.domain/events";
import { IHistoryService } from "../contracts/history.service.interface";
import { HistoryView } from "../read.models/history.view";

const HistoryService = () => Inject('HistoryService');  

@EventsHandler(BalanceCreatedDomainEvent)
export class HistoryCreatedDomainEventHandler implements IEventHandler<BalanceCreatedDomainEvent>
{
    
    constructor(@HistoryService() private service : IHistoryService){}

    async handle(event: BalanceCreatedDomainEvent) {
        const history = new HistoryView();
        history.applyCreated(event);
        await this.service.add(history);    
    }

}