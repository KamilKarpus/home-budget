import { DomainEventBase } from "./event.base";

export class Entity {
    private _domainEvents : DomainEventBase[] = [];


    protected addDomainEvent(event : DomainEventBase)  : void{
        this._domainEvents.push(event);
    }

    public getEvents() : DomainEventBase[] {
        return this._domainEvents;
    }
}