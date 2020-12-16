import { Inject } from "@nestjs/common";
import { Guid } from "guid-typescript";
import { Model } from "mongoose";
import { DomainEventBase } from "src/bulding.blocks/domain";
import { EventDocument } from "src/bulding.blocks/infrastructure/models/event.store.dao";

export class EventStore{
    constructor(@Inject('BUDGET_EVENTSTORE')
    private eventModel : Model<EventDocument>){

    }


    public async commitAsync(aggregateId : Guid, currentVersion : number, events : DomainEventBase[]){
        var eventsDaos = [];
        for (const event of events) {
            let newEvent = {
                id : event.id,
                data : JSON.stringify(event),
                version : ++currentVersion,
                createdAt : event.occuredDate,
                name : event.constructor.name,
                aggregateId: aggregateId.toString()
            }
            eventsDaos.push(newEvent);
        }
        await this.eventModel.insertMany(eventsDaos);
    }

    public async loadAsync(aggregateId : Guid) : Promise<DomainEventBase[]>{
        const eventDaos = await this.eventModel.find({aggregateId: aggregateId.toString()});
        const concreteEvents = [];
        for (const event of eventDaos) {
            concreteEvents.push(JSON.parse(event.data));
        }
        return concreteEvents as DomainEventBase[];

    }
}