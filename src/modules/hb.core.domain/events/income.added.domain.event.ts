import { BalanceEventBase } from ".";
import { Money } from "..";


export class IncomeAddedDomainEvent extends BalanceEventBase{

    constructor(moneyChange : Money, comment : string){
        super(moneyChange, comment);
    }
}