import { Inject } from "@nestjs/common";
import { IHistoryService } from "../../hb.core.application/contracts/history.service.interface";
import { HistoryView } from "../../hb.core.application/read.models/history.view";
import { Model } from 'mongoose';
import { Guid } from "guid-typescript";
import { BudgetHistoryView } from "../../hb.core.application/read.models/budget.history.view";

export class HistoryService implements IHistoryService{
    
    constructor(@Inject('HISTORY_VIEW')
    private viewModel : Model<BudgetHistoryView>
    ){

    }

    add(history: BudgetHistoryView): Promise<void> {
        const documnet = new this.viewModel(history);
        return documnet.save();
    }

    async update(history : BudgetHistoryView){
        await this.viewModel.updateOne({_id: history._id}, history);
    }

    async findManyByBalanceId(balanceId: Guid) : Promise<BudgetHistoryView[]>{
        return await this.viewModel.find({BudgetId : balanceId.toString()});
    }
}