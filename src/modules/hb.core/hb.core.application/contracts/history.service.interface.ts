import { Guid } from "guid-typescript";
import { HistoryView } from "../read.models/history.view";

export interface IHistoryService{
    addHistory(history: HistoryView): Promise<void>;
    loadById(id: Guid) : Promise<HistoryView>;
    update(history : HistoryView);
}