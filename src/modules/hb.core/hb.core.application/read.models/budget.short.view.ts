import { BalanceCreatedDomainEvent, ExpenditureAddedDomainEvent, IncomeAddedDomainEvent } from "../../hb.core.domain/events";

export class BudgetShortView{
    public id : string;
    public totalIncome : number;
    public totalExpenditure : number;
    public currency: string;
    public name : string;
    public total: number;
    public userId : string;

    constructor(
    ) {}

    public applyCreated(event : BalanceCreatedDomainEvent){
        this.id = event.balanceId;
        this.userId = event.userId;
        this.currency = event.currency;
        this.name = event.balanceName;
        this.totalExpenditure = 0;
        this.totalIncome = 0;
        this.totalExpenditure = 0;
    }

    public applyIncome(event : IncomeAddedDomainEvent){
        this.totalIncome = event.totalIncome.getValue();
        this.total = event.totalIncome.getValue();
    }

    public applyExpenditure(event : ExpenditureAddedDomainEvent){
        this.totalExpenditure = event.totalExpenditure.getValue();
        this.total = event.total.getValue();
    }

}