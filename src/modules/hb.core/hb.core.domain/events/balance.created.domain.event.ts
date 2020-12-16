import { Guid } from "guid-typescript";
import { DomainEventBase } from "src/bulding.blocks/domain";



export class BalanceCreatedDomainEvent extends DomainEventBase{
    public balanceId : string;
    public balanceName : string;
    public userId : string;
    public currency : string;

    constructor(balanceId : string, balanceName : string, 
        userId: string, currency : string){
        super("BalanceCreatedDomainEvent");
        this.balanceId = balanceId;
        this.balanceName = balanceName;
        this.userId = userId;
        this.currency = currency;
    }
}