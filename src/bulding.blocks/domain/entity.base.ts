import { DomainEventBase } from "./event.base";
import { AggregateRoot } from '@nestjs/cqrs';

export class Entity extends AggregateRoot {


    protected addDomainEvent(event : DomainEventBase)  : void{
        this.apply(event);
    }



}