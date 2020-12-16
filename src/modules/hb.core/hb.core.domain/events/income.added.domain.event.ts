
import { Money } from "..";
import { DomainEventBase } from "src/bulding.blocks/domain";
import { Guid } from "guid-typescript";


export class IncomeAddedDomainEvent extends DomainEventBase{

    public budgetId : string;
    public change : Money;
    public reason: string;
    public totalIncome : Money;
    public total: Money;

    constructor(moneyChange : Money, reason : string, budgetId : string,
        _totalIncome : Money, total:Money){
        super("IncomeAddedDomainEvent");
        this.change = moneyChange;
        this.reason = reason;
        this.budgetId = budgetId;
        this.totalIncome = _totalIncome;
        this.total = total;
    }

}