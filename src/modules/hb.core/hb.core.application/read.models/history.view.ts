import { Guid } from "guid-typescript";
import { BudgetHistoryView } from "./budget.history.view";

export class HistoryView{
    constructor(
        public _id: Guid,
        public History : BudgetHistoryView[]
    ){

    }
}