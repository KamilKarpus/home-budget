import { Guid } from "guid-typescript";
import { BudgetHistoryView } from "../read.models/budget.history.view";
import { HistoryView } from "../read.models/history.view";

export interface IHistoryService{
    add(history: HistoryView): Promise<void>;
    findByBalanceId(balanceId: Guid) : Promise<HistoryView>;
    update(history : HistoryView) : Promise<void>;
}