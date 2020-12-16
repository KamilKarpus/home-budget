import { Guid } from "guid-typescript";
import { MoneyView } from "./money.view"

export class BudgetHistoryView{
    constructor(
    public id : string,
    public change: MoneyView,
    public type : number,
    public reason: string,
    public budgetId: string, 
    public occuredOn :Date){
    }
}
