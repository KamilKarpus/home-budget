import { Guid } from "guid-typescript";
import { Money } from ".";
import { ChangeType } from "./change.type";

export class BudgetHistory{
    private _id : Guid;
    private _change: Money;
    private _type : ChangeType;
    private _reason: string;
    private _occuredOn :Date;
    constructor(id: Guid, change : Money, type: ChangeType, reason: string, occuredOn: Date){
        this._change  = change;
        this._type = type;
        this._id = id;
        this._reason = reason;
        this._occuredOn = occuredOn;
    
    }
    
    public getMoney() : Money{
        return this._change;
    }

    public getId() : Guid{
        return this._id;
    }

    public getType() : ChangeType{
        return this._type;
    }

    public getReason() : string{
        return this._reason;
    }

    public getDate() : Date{
        return this._occuredOn;
    }

    public static CreateHistory() : BudgetHistory{
        return new BudgetHistory(Guid.create(), Money.default(), ChangeType.Created, "", new Date());
    }

    public static IncomeHistory(change : Money, reason : string) : BudgetHistory{
        return new BudgetHistory(Guid.create(), change, ChangeType.Income, reason, new Date());
    }

    public static ExpenditureHistory(change : Money, reason : string) : BudgetHistory{
        return new BudgetHistory(Guid.create(), change, ChangeType.Income, reason, new Date());
    }
}