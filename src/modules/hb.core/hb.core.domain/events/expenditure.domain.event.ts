import { Guid } from "guid-typescript";

import { Money } from "..";
import { DomainEventBase } from "src/bulding.blocks/domain";


export class ExpenditureAddedDomainEvent extends DomainEventBase{

    private _budgetId : Guid;
    private _change : Money;
    private _reason: string;
    private _totalExpenditure : Money;
    private _total : Money;
    private _changeId : Guid;

    constructor(moneyChange : Money, reason : string, budgetId : Guid,
        totalExpenditure : Money, total : Money, changeId : Guid){
        super();

        this._change = moneyChange;
        this._reason = reason;
        this._budgetId = budgetId;
        this._changeId = changeId;
        this._total = total;
        this._totalExpenditure = totalExpenditure;
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

    public getTotalExpenditure() : Money{
        return this._totalExpenditure;
    }
    
    public getChangeId() : Guid{
        return this._changeId;
    }

    public getTotal() : Money{
        return this._total;
    }
}