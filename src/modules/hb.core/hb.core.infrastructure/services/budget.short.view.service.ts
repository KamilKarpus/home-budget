import { Inject } from "@nestjs/common";
import { BudgetShortView } from "../../hb.core.application/read.models/budget.short.view";
import { Model } from 'mongoose';
import { Guid } from "guid-typescript";

export class BudgetShortViewService{
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
}