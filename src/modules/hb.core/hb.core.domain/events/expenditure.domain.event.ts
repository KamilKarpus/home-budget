import { Guid } from "guid-typescript";

import { Money } from "..";
import { DomainEventBase } from "src/bulding.blocks/domain";


export class ExpenditureAddedDomainEvent extends DomainEventBase{

    public budgetId : string;
    public change : Money;
    public reason: string;
    public totalExpenditure : Money;
    public total : Money;

    constructor(moneyChange : Money, reason : string, budgetId : string,
        totalExpenditure : Money, total : Money){
        super("ExpenditureAddedDomainEvent");

        this.change = moneyChange;
        this.reason = reason;
        this.budgetId = budgetId;
        this.total = total;
        this.totalExpenditure = totalExpenditure;
    }

}