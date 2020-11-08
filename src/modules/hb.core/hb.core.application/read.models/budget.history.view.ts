import { Guid } from "guid-typescript";
import { MoneyView } from "./money.view"

export class BudgetHistoryView{
    constructor(
    public _id : Guid,
    public Change: MoneyView,
    public Type : number,
    public Reason: string,
    public OccuredOn :Date){
        
    }
}
