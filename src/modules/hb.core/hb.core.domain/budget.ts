import { Guid } from "guid-typescript";
import { Entity } from "src/bulding.blocks/domain";

import { BalanceCreatedDomainEvent, ExpenditureAddedDomainEvent, IncomeAddedDomainEvent } from "./events";
import { BudgetHistory } from "./history";
import { Money } from "./money";

export class Budget extends Entity{
    private _id : Guid;
    private _history : BudgetHistory[];
    private _totalIncome : Money;
    private _totalExpenditure : Money;
    private _name : string;

    public getId() : Guid{
        return this._id;
    }
    public getHistory() : BudgetHistory[]{
        return this._history;
    }

    public getTotalIncome() : Money{
        return this._totalIncome;
    }

    public getTotalExpenditure() : Money{
        return this._totalExpenditure;
    }

    public getName() : string{
        return this._name;
    }
    
    constructor(id : Guid, name : string, totalIncome : Money, totalExpenditure : Money, history : BudgetHistory[]) {
        super();
        this._id = id;
        this._totalIncome = totalIncome;
        this._totalExpenditure = totalExpenditure;
        this._name = name;
        this._history = history;
    }

    public static create(id: Guid, name : string) : Budget{

        const history = [];
        history.push(BudgetHistory.CreateHistory());
        const budget = new Budget(id, name, Money.default(), Money.default(),history);
        budget.addDomainEvent(new BalanceCreatedDomainEvent(id, name));
        return budget;
    }

    public addIncome(amount : number, currency: string, comment : string) : void{

        let money = new Money(amount, currency);

        let event = new IncomeAddedDomainEvent(money, comment,this._id);
        
        this._totalIncome = this._totalIncome.add(money);

        this._history.push(BudgetHistory.IncomeHistory(money, comment));

        this.addDomainEvent(event);
    }

    public addExpenditure(amount : number, currency: string, comment : string) : void{

        let money = new Money(amount, currency);

        let event = new ExpenditureAddedDomainEvent(money, currency, this._id);

        this._totalIncome = this._totalExpenditure.add(money);

        this._history.push(BudgetHistory.ExpenditureHistory(money, comment));

        this.addDomainEvent(event);
    }
    


}