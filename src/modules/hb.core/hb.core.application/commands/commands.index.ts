
import { AddExpenditureCommandHandler } from "./add.expenditure.command/add.expenditure.command.handler";
import { AddIncomeCommandHandler } from "./add.income.command/add.income.command.handler";
import { CreateBudgetCommandHandler } from "./create.budget.command/create.budget.command.handler";


export const CommandHandlers = [CreateBudgetCommandHandler, AddIncomeCommandHandler,
    AddExpenditureCommandHandler];