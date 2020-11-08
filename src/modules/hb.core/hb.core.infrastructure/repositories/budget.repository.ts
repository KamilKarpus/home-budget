import { Inject } from "@nestjs/common";
import { Model } from 'mongoose';
import { Budget } from "../../hb.core.domain";
import { EventPublisher } from '@nestjs/cqrs';
import { Guid } from "guid-typescript";
import { BudgetMapper } from "../documents/budget/budget.mapper";
import { IBudgetRepository } from "../../hb.core.domain/repositories/budget.repository.interface";

export class BudgetRepository implements IBudgetRepository
{

    private _mapper : BudgetMapper;
    constructor(@Inject('BUDGET_MODEL')
        private budgetModel : Model<Budget>,
        private publisher : EventPublisher){
            this._mapper = new BudgetMapper();
    }

    async create(budgetToAdd : Budget): Promise<Budget>{
        const document = new this.budgetModel(budgetToAdd);

        const events = this.publisher.mergeObjectContext(
            budgetToAdd
        );
        events.commit();

        return document.save();
    }

    async update(budget : Budget){
        await this.budgetModel.updateOne({_id: budget.getId()}, budget);

        const events = this.publisher.mergeObjectContext(
            budget
        );
        events.commit();
    }

    async findById(id: Guid) : Promise<Budget>{
        const doc = await this.budgetModel.findById(id.toString()).lean();
        return this._mapper.toEntity(doc);
    }
}