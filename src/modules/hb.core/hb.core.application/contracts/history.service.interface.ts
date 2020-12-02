import { Guid } from "guid-typescript";
import { BudgetHistoryView } from "../read.models/budget.history.view";

export interface IHistoryService{
    add(history: BudgetHistoryView): Promise<void>;
    findManyByBalanceId(balanceId: Guid) : Promise<BudgetHistoryView[]>;
    update(history : BudgetHistoryView) : Promise<void>;
}