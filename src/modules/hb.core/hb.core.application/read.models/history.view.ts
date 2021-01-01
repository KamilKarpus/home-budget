import { Pagination } from "src/bulding.blocks/application/paggination/pagination";
import { ChangeType } from "../../hb.core.domain/change.type";
import { BalanceCreatedDomainEvent, ExpenditureAddedDomainEvent, IncomeAddedDomainEvent } from "../../hb.core.domain/events";
import { BudgetHistoryView } from "./budget.history.view";

export class HistoryView{
    public id: string;
    public history : BudgetHistoryView[];
    constructor(
    ){
        this.history = [];
    }

    public applyCreated(event: BalanceCreatedDomainEvent){
        this.id = event.balanceId;
        const historyView : BudgetHistoryView = {
            id : event.id,
            change: {
                currency: event.currency,
                value: 0
            },
            type : ChangeType.Created.getId(),
            reason: "",
            budgetId: event.balanceId, 
            occuredOn : event.occuredDate
        };
        this.history.push(historyView);
    }
    public applyIncome(event : IncomeAddedDomainEvent){
        const historyView : BudgetHistoryView = {
            id : event.id,
            change: {
                currency: event.change.getCurrency(),
                value: event.change.getValue()
            },
            type : ChangeType.Created.getId(),
            reason: event.reason,
            budgetId: event.budgetId, 
            occuredOn : event.occuredDate
        };
        this.history.push(historyView);
    }

    public applyExpenditure(event : ExpenditureAddedDomainEvent){
        const historyView : BudgetHistoryView = {
            id : event.id,
            change: {
                currency: event.change.getCurrency(),
                value: event.change.getValue()
            },
            type : ChangeType.Created.getId(),
            reason: event.reason,
            budgetId: event.budgetId, 
            occuredOn : event.occuredDate
        };
        this.history.push(historyView);
    }

    public toPagination(pageNumber : number,  pageSize : number) : Pagination<BudgetHistoryView>{
        var firstItem = pageSize * (pageNumber-1);
        var items = this.history.slice(firstItem, firstItem + pageSize);
        return new Pagination<BudgetHistoryView>(items, items.length, pageNumber, pageSize, 5);


    }
}