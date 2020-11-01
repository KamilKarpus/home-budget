import { DomainEventBase } from "./event.base";

export class Entity {
    private _domainEvents : DomainEventBase[] = [];


    protected AddDomainEvent(event : DomainEventBase)  : void{
        this._domainEvents.push(event);
    }

    public GetEvents() : DomainEventBase[] {
        return this._domainEvents;
    }
}