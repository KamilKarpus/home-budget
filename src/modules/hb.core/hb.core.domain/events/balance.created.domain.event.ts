import { Guid } from "guid-typescript";
import { DomainEventBase } from "src/bulding.blocks/domain";



export class BalanceCreatedDomainEvent extends DomainEventBase{
    private _balanceId : Guid;
    private _balanceName : string;
    private _historyId : Guid;
    private _userId : Guid;

    constructor(balanceId : Guid, balanceName : string, historyId: Guid,
        userId : Guid){
        super();
        this._balanceId = balanceId;
        this._balanceName = balanceName;
        this._historyId = historyId;
        this._userId = userId;
    }

    public getBalanceId() : Guid{
        return this._balanceId;
    }

    public getBalanceName(): string{
        return this._balanceName;
    }
    public getHistoryId() : Guid{
        return this._historyId;
    }

    public getUserId() : Guid{
        return this._userId;
    }
}