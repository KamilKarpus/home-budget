import { Inject } from "@nestjs/common";
import { Model } from 'mongoose';
import { Budget } from "../../hb.core.domain";
import { EventPublisher } from '@nestjs/cqrs';

export class BudgetRepository
{
    constructor(@Inject('BUDGET_MODEL')
        private budgetModel : Model<Budget>,
        private publisher : EventPublisher){
    }

    async create(budgetToAdd : Budget): Promise<Budget>{
        const document = new this.budgetModel(budgetToAdd);

        const events = this.publisher.mergeObjectContext(
            budgetToAdd
        );
        events.commit();

        return document.save();
    }
}