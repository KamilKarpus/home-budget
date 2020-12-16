import { Guid } from "guid-typescript";
import { DomainEventBase } from "src/bulding.blocks/domain";
import { EventSourcedAggregate } from "src/bulding.blocks/domain/event.sourced.aggregate";

import { BalanceCreatedDomainEvent, ExpenditureAddedDomainEvent, IncomeAddedDomainEvent } from "./events";
import { Money } from "./money";

export class Budget extends EventSourcedAggregate{
    private _totalIncome : Money;
    private _totalExpenditure : Money;
    private _name : string;
    private _total : Money;
    private _userId : string;
    private _currency : string;

    private constructor() {
        super();
        this.registerHandler("BalanceCreatedDomainEvent", this.applyEventCreate);
        this.registerHandler("ExpenditureAddedDomainEvent", this.applyEventExpenditure);
        this.registerHandler("IncomeAddedDomainEvent", this.applyEventIncome);
    }

    public static create(id: Guid, name : string, userId : Guid, currency: string) : Budget{

        const budget = new Budget();
        budget._id = id.toString();
        budget._name = name;
        budget._userId = userId.toString();
        budget._currency = currency;
        budget.addDomainEvent(new BalanceCreatedDomainEvent(budget._id, name, budget._userId, currency));
        return budget;
    }

    public static load(events : DomainEventBase[]) : Budget{
        const budget = new Budget();
        budget.applyEvents(events);
        return budget;
    }

    public addIncome(amount : number, comment : string) : void{
        let money = new Money(amount, this._currency);

        this._totalIncome = this._totalIncome.add(money);
        
        this._total = this._total.add(money);

        let event = new IncomeAddedDomainEvent(money, comment,this._id, this._totalIncome, 
            this._total);
        
        this.addDomainEvent(event);
    }

    public addExpenditure(amount : number, comment : string) : void{
        let money = new Money(amount, this._currency);

        this._totalExpenditure = this._totalExpenditure.add(money);

        this._total = this._total.sub(money);

        let event = new ExpenditureAddedDomainEvent(money, comment, this._id,this._totalExpenditure, 
            this._total);

        this.addDomainEvent(event);
    }
    
    public applyEventCreate(budget : Budget, event : BalanceCreatedDomainEvent){
        budget._id = event.balanceId;
        budget._name = event.balanceName;
        budget._userId = event.userId;
        budget._currency = event.currency;

        budget._total = Money.empty(budget._currency);
        budget._totalIncome = Money.empty(budget._currency);
        budget._totalExpenditure = Money.empty(budget._currency);
    }

    public applyEventExpenditure(budget : Budget, event : ExpenditureAddedDomainEvent){
        budget._totalExpenditure = budget._totalExpenditure.add(event.change);
        budget._total = budget._total.sub(event.change);
    }
    public applyEventIncome(budget: Budget,event : IncomeAddedDomainEvent){
       budget._totalIncome = budget._totalIncome.add(event.change);
       budget._total = budget._total.add(event.change);
    }



}