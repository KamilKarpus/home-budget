import { BudgetRepository } from "../repositories/budget.repository";
import { EventStore } from "../../../../bulding.blocks/infrastructure/event.store";
import { FixedIncomeRepository } from "../repositories/fixed-income-repository";


export const BudgetRepositoryProvider = [{
    provide: 'BudgetRepository',
    useClass: BudgetRepository
},{
    provide: 'EventStore',
    useClass: EventStore
},{
    provide: 'FixedIncomeRepository',
    useClass : FixedIncomeRepository
}]