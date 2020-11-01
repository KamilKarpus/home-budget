import { BalanceEventBase } from ".";
import { Money } from "..";


export class ExpenditureAddedDomainEvent extends BalanceEventBase{

    constructor(moneyChange : Money, comment : string){
        super(moneyChange, comment);
    }
}