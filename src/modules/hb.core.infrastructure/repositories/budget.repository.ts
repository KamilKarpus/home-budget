import { Inject } from "@nestjs/common";
import { Model } from 'mongoose';
import { Budget } from "src/modules/hb.core.domain";
import { BudgetDocument } from "../documents/budget/budget.document";
import { BudgetMapper } from "../documents/budget/budget.mapper";

export class BudgetRepository
{
    private mapper : BudgetMapper;
    constructor(@Inject('BUDGET_MODEL')
        private budgetModel : Model<Budget>){
        this.mapper = new BudgetMapper();
    }

    async create(budgetToAdd : Budget): Promise<BudgetDocument>{
        const budgetDto = this.mapper.ToDto(budgetToAdd);
        const document = new this.budgetModel(budgetDto);
        return document.save();
    }
}