import { Inject } from "@nestjs/common";
import { BudgetShortView } from "../../hb.core.application/read.models/budget.short.view";
import { Model } from 'mongoose';
import { Guid } from "guid-typescript";
import { IBudgetShortViewService } from "../../hb.core.application/contracts/budget.short.view.interface";

export class BudgetShortViewService implements IBudgetShortViewService{
    constructor(@Inject('BUDGET_SHORT_VIEW_MODEL')
    private budgetModel : Model<BudgetShortView>
    ){

    }


    async commitView(view : BudgetShortView){
       const documnet = this.budgetModel(view);
       documnet.save();
    }

    async loadById(id: Guid) : Promise<BudgetShortView>{ 
        return await this.budgetModel.findById(id.toString());
    }

    async update(budget : BudgetShortView){
        await this.budgetModel.updateOne({_id: budget._id}, budget);
    }

    async getManyByUserId(userId : Guid) : Promise<BudgetShortView[]>{
        return await this.budgetModel.find({ UserId :userId.toString()});
    }
}