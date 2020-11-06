import { MoneyView } from "./money.view"

export class BudgetHistoryView{
    constructor(
    public _id : string,
    public _change: MoneyView,
    public _type : number,
    public _reason: string,
    public _occuredOn :Date){
        
    }
}
