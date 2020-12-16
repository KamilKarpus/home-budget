import { Provider } from "@nestjs/common";
import { BudgetRepository } from "../repositories/budget.repository";
import { EventStore } from "../../../../bulding.blocks/infrastructure/event.store";

export const BudgetRepositoryProvider = [{
    provide: 'BudgetRepository',
    useClass: BudgetRepository
},{
    provide: 'EventStore',
    useClass: EventStore
}]