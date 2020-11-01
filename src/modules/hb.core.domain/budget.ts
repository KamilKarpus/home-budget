import { Guid } from "guid-typescript";
import { Entity } from "src/bulding.blocks/domain";
import { BalanceEventBase, ExpenditureAddedDomainEvent, IncomeAddedDomainEvent } from "./events";
import { Money } from "./money";

export class Budget extends Entity{
    private _id : Guid;
    private _balance : BalanceEventBase[];
    private _totalIncome : Money;
    private _totalExpenditure : Money;


    constructor(id : Guid) {
        super();
        this._id = id;
        this._totalIncome = Money.Default();
        this._totalExpenditure = Money.Default();
    }

    public AddIncome(amount : number, currency: string, comment : string) : void{

        let money = new Money(amount, currency);

        let event = new IncomeAddedDomainEvent(money, comment);
        
        this._totalIncome.Add(money);

        this._balance.push(event);
        this.AddDomainEvent(event);
    }

    public AddExpenditure(amount : number, currency: string, comment : string) : void{

        let money = new Money(amount, currency);

        let event = new ExpenditureAddedDomainEvent(money, currency);

        this._totalExpenditure.Add(money);

        this._balance.push(event);
        this.AddDomainEvent(event);
    }
    


}