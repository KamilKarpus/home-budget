import { DomainEventBase } from "./event.base";
import { AggregateRoot } from '@nestjs/cqrs';
import { BusinessRule } from "./business.rule.base";

export class Entity extends AggregateRoot {


    protected addDomainEvent(event : DomainEventBase)  : void{
        this.apply(event);
    }

    protected checkRule(rule : BusinessRule){
        if(rule.isBroken()){
            rule.throw();
        }
    }

}