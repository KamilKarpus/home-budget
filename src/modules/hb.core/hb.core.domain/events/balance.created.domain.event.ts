import { Guid } from "guid-typescript";
import { DomainEventBase } from "src/bulding.blocks/domain";



export class BalanceCreatedDomainEvent extends DomainEventBase{
    private _balanceId : Guid;
    private _balanceName : string;

    constructor(balanceId : Guid, balanceName : string){
        super();
        this._balanceId = balanceId;
        this._balanceName = balanceName;
    }

    public getBalanceId() : Guid{
        return this._balanceId;
    }

    public getBalanceName(): string{
        return this._balanceName;
    }
}