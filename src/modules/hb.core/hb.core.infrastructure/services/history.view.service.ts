import { Inject } from "@nestjs/common";
import { IHistoryService } from "../../hb.core.application/contracts/history.service.interface";
import { HistoryView } from "../../hb.core.application/read.models/history.view";
import { Model } from 'mongoose';
import { Guid } from "guid-typescript";
import { HistoryDocument } from "../documents/budget.readmodel/history.view.schema";

export class HistoryService implements IHistoryService{
    
    constructor(@Inject("HISTORY_VIEW")
       private model : Model<HistoryDocument>
    ){

    }
    async add(history: HistoryView): Promise<void> {
        await this.model.insertMany(history);
    }
    async findByBalanceId(balanceId: Guid): Promise<HistoryView> {
        const model = await this.model.findOne({id: balanceId.toString()}); 
        var balance = new HistoryView();
        balance.id = model.id;
        balance.history = model.history;
        return balance;
    }
    async update(history: HistoryView): Promise<void> {
        await this.model.updateOne({id: history.id},history);
    }


}