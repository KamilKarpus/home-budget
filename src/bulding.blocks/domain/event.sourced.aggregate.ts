import { Guid } from "guid-typescript";
import { DomainEventBase } from "./event.base";

export abstract class EventSourcedAggregate{
    protected _id : string;
    private _eventsHandlers: {[type : string] : (source : EventSourcedAggregate, event : DomainEventBase) =>void}
    private _domainEvents : DomainEventBase[];
    private _version : number;
    constructor(){
        this._domainEvents = [];
        this._eventsHandlers = {};
        this._version = 0;
    }
    
    public getAggregateId() : Guid{
        return Guid.parse(this._id);
    }


    protected registerHandler(eventName : string,handler : (source: EventSourcedAggregate,event : DomainEventBase) =>void) : void{
        this._eventsHandlers[eventName] = handler;
    }

    public applyEvent(domainEvent : DomainEventBase) : void{
        this._eventsHandlers[domainEvent.type](this, domainEvent);
        ++this._version;
    }

    public addDomainEvent(event : DomainEventBase){
        this._domainEvents.push(event);
    }

    public applyEvents(events : DomainEventBase[]){
        events.forEach(event => {
            this.applyEvent(event);
        });
    }

    public getDomainEvents() : DomainEventBase[]{
        return this._domainEvents;
    }

    public getVersion(): number{
        return this._version;
    }
}