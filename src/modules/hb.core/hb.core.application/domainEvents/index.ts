import { IncomeAddedDomainEventHandler } from './balance.income.added.domain.event.handler';
import { BudgetCreatedDomainEventHandler } from './budget.created.domain.event.handler';
import { HistoryCreatedDomainEventHandler } from './history.created.domain.event.handler';
import { HistoryIncomeAddedDomainEventHandler } from './history.income.added.domain.event.handler';

export const EventHandlers = [BudgetCreatedDomainEventHandler, HistoryCreatedDomainEventHandler, IncomeAddedDomainEventHandler,
    HistoryIncomeAddedDomainEventHandler];