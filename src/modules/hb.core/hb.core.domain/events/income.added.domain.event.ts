import { Guid } from "guid-typescript";

import { Money } from "..";
import { DomainEventBase } from "src/bulding.blocks/domain";


export class IncomeAddedDomainEvent extends DomainEventBase{

    private _budgetId : Guid;
    private _change : Money;
    private _reason: string;

    constructor(moneyChange : Money, reason : string, budgetId : Guid){
        super();
        this._change = moneyChange;
        this._reason = reason;
        this._budgetId = budgetId;
    }

    public getBudgetId() : Guid{
        return this._budgetId;
    }

    public getChange() : Money{
        return this._change;
    }

    public getReason() : string{
        return this._reason;
    }
}