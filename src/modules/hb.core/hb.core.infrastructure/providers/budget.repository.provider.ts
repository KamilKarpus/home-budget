import { Provider } from "@nestjs/common";
import { BudgetRepository } from "../repositories/budget.repository";

export const BudgetRepositoryProvider: Provider = {
    provide: 'BudgetRepository',
    useClass: BudgetRepository
    
}