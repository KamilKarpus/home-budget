import { DomainEventBase } from "src/bulding.blocks/domain";
import { Money } from "..";


export abstract class BalanceEventBase extends DomainEventBase{
    private _moneyChange : Money;
    private _comment : string;

    constructor(moneyChange : Money, 
        comment : string){
            super();
        this._moneyChange = moneyChange;
        this._comment = comment;

    }

    public GetChange() : Money{
        return this._moneyChange;
    }

    public GetComment() : string{
        return this._comment;
    }
}