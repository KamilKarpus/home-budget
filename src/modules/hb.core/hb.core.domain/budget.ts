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
    private _total : Money;

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
    
    constructor(id : Guid, name : string, totalIncome : Money, totalExpenditure : Money, total : Money, history : BudgetHistory[]) {
        super();
        this._id = id;
        this._totalIncome = totalIncome;
        this._totalExpenditure = totalExpenditure;
        this._name = name;
        this._history = history;
        this._total = total;
    }

    public static create(id: Guid, name : string) : Budget{

        const history = [];
        const historyToAdd = BudgetHistory.CreateHistory();
        history.push(historyToAdd);
        const budget = new Budget(id, name, Money.default(), Money.default(), Money.default(),history);
        budget.addDomainEvent(new BalanceCreatedDomainEvent(id, name, historyToAdd.getId()));
        return budget;
    }

    public addIncome(amount : number, currency: string, comment : string) : void{

        let money = new Money(amount, currency);
    
        this._totalIncome = this._totalIncome.add(money);
        
        const change = BudgetHistory.IncomeHistory(money, comment); 

        this._history.push(change);

        this._total = this._total.add(money);

        let event = new IncomeAddedDomainEvent(money, comment,this._id, this._totalIncome, change.getId(), 
            this._total);
        
        this.addDomainEvent(event);
    }

    public addExpenditure(amount : number, currency: string, comment : string) : void{

        let money = new Money(amount, currency);

        this._totalExpenditure = this._totalExpenditure.add(money);
        
        const change = BudgetHistory.ExpenditureHistory(money, comment);

        this._history.push(change);

        this._total = this._total.sub(money);

        let event = new ExpenditureAddedDomainEvent(money, currency, this._id,this._totalExpenditure, 
            this._total, change.getId());

        this.addDomainEvent(event);
    }
    


}