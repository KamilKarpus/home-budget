import { Inject } from "@nestjs/common";
import { BudgetShortView } from "../../hb.core.application/read.models/budget.short.view";
import { Model } from 'mongoose';
import { Guid } from "guid-typescript";
import { IBudgetShortViewService } from "../../hb.core.application/contracts/budget.short.view.interface";
import { BudgetShortViewDocument } from "../documents/budget.readmodel/budget.view.schema";

export class BudgetShortViewService implements IBudgetShortViewService{
    
    constructor(@Inject('BUDGET_SHORT_VIEW_MODEL')
    private model : Model<BudgetShortViewDocument>){

    }


    async commitView(view : BudgetShortView){
        await this.model.insertMany(view);
    }

    async loadById(id: Guid) : Promise<BudgetShortView>{ 
        const result = await this.model.findOne({id : id.toString()});
        return this.toSolidView(result);
    }

    async update(budget : BudgetShortView){
        await this.model.updateOne({id: budget.id}, budget);
    }

    async getManyByUserId(userId : Guid, pageSize : number, page: number) : Promise<BudgetShortView[]>{
        return await this.model.find({ userId :userId.toString()}).limit(pageSize).skip(pageSize * (page-1));
    }

    async getCount(userId: Guid) : Promise<number>{
        return await this.model.find({ userId :userId.toString()}).countDocuments();
    }

    private toSolidView(budget : BudgetShortView) : BudgetShortView{
        const solidBudget = new BudgetShortView();
        solidBudget.id = budget.id;
        solidBudget.name = budget.name;
        solidBudget.total = budget.total;
        solidBudget.totalExpenditure = budget.totalExpenditure;
        solidBudget.totalIncome = budget.totalIncome;
        solidBudget.userId = budget.userId;
        solidBudget.currency = budget.currency;
        return solidBudget;
    }
}