import { Guid } from "guid-typescript";

import { Money } from "..";
import { DomainEventBase } from "src/bulding.blocks/domain";


export class IncomeAddedDomainEvent extends DomainEventBase{

    private _budgetId : Guid;
    private _change : Money;
    private _reason: string;
    private _totalIncome : Money;
    private _historyId : Guid;
    private _total: Money;

    constructor(moneyChange : Money, reason : string, budgetId : Guid,
        _totalIncome : Money, historyId: Guid, total:Money){
        super();
        this._change = moneyChange;
        this._reason = reason;
        this._budgetId = budgetId;
        this._totalIncome = _totalIncome;
        this._historyId = historyId;
        this._total = total;
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

    public getTotalIncome() : Money{
        return this._totalIncome;
    }

    public getHistoryId() : Guid{
        return this._historyId;
    }

    public getTotal() : Money{
        return this._total;
    }
}