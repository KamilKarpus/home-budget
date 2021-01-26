import { Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { doc } from "prettier";
import { Money } from "../../hb.core.domain";
import { FixedIncome } from "../../hb.core.domain/fixed-incomes/fixed.income";
import { IncomeType } from "../../hb.core.domain/fixed-incomes/icome.type";
import { FixedTypesDays } from "../../hb.core.domain/fixed.day.types";
import { IFixedIncomeRepository } from "../../hb.core.domain/repositories/fixed-income-repository.interface";
import { FixedIncomeDocument, FixedIncomeSolidDocument } from "../documents/fixed-income/fixed-icome-document";

export class FixedIncomeRepository implements IFixedIncomeRepository{

    constructor(@Inject('FIXED_INCOME_MODEL') private fixedIncomeModel : Model<FixedIncomeDocument>){}

    async add(fixedIncome: FixedIncome): Promise<void> {
         var document : FixedIncomeSolidDocument = {
             id : fixedIncome["_id"],
             incomeType : fixedIncome["_incomeType"].getId(),
             description: fixedIncome["_description"],
             money: fixedIncome["_money"].getValue(),
             type: fixedIncome["_type"].getId(),
             currency : fixedIncome["_money"].getCurrency(),
             budgetId : fixedIncome["_budgetId"],
             dayOfIncome: fixedIncome["_dayOfIncome"]
         }


         await this.fixedIncomeModel.insertMany(document);
    }

    async getById(id: string): Promise<FixedIncome> {

        var document = await this.fixedIncomeModel.findOne({id : id});
        return this.toEntity(document);
    }

    async getByBudgetId(budgetId: string): Promise<FixedIncome[]> {
        var documents = await this.fixedIncomeModel.find({budgetId : budgetId});
        var entities = documents.map(x=> this.toEntity(x));
        return entities;
    }

    private toEntity(document : FixedIncomeSolidDocument) : FixedIncome{
        return new FixedIncome(document.id, FixedTypesDays.from(document.type), document.budgetId,
        IncomeType.from(document.incomeType),Money.of(document.money, document.currency), document.description,
        document.dayOfIncome);
        
    }

    async getByTypeId(number: number): Promise<FixedIncome[]> {
        var documents = await this.fixedIncomeModel.find({type : number});
        var entities = documents.map(x => this.toEntity(x));
        return entities;
    }
    async getByTypeIdAndDays(number: number, day: number): Promise<FixedIncome[]> {
        var documents = await this.fixedIncomeModel.find(
            {
                type : number,
                dayOfIncome : day
            });
        var entities = documents.map(x => this.toEntity(x));
        return entities;
    }
}