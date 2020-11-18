import { GetByBudgesByUserIdQueryHandler } from "./getBudgetsByIds/get.budgets.by.id.query.handler";
import { GetByIdBudgetViewQueryHandler } from "./getByIdBudgetView/get.by.id.budget.view.query.handler";
import { GetCurrenciesQueryHandler } from "./getCurrencies/get.currencies.query.handler";
import { GetHistoryByIdQueryHandler } from "./getHistoryByIdView/get.history.by.id.query.handler";


export const QueryHandlers = [GetByIdBudgetViewQueryHandler, GetHistoryByIdQueryHandler,
    GetByBudgesByUserIdQueryHandler, GetCurrenciesQueryHandler];