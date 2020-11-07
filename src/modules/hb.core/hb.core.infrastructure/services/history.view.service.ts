import { Inject } from "@nestjs/common";
import { IHistoryService } from "../../hb.core.application/contracts/history.service.interface";
import { HistoryView } from "../../hb.core.application/read.models/history.view";
import { Model } from 'mongoose';
import { Guid } from "guid-typescript";

export class HistoryService implements IHistoryService{
    
    constructor(@Inject('HISTORY_VIEW')
    private viewModel : Model<HistoryView>
    ){

    }

    addHistory(history: HistoryView): Promise<void> {
        const documnet = new this.viewModel(history);
        return documnet.save();
    }

    async update(history : HistoryView){
        await this.viewModel.updateOne({_id: history._id}, history);
    }

    async loadById(id: Guid){
        return await this.viewModel.findById(id.toString());
    }
}