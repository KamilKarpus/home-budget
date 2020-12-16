import { Connection } from 'mongoose';
import { EventStoreSchema } from 'src/bulding.blocks/infrastructure/schemas/event.store.schema';
import { BudgetShortViewSchema } from '../documents/budget.readmodel/budget.view.schema';
import { HistoryBudgetSchema, HistoryViewSchema } from '../documents/budget.readmodel/history.view.schema';
import { BudgetCreatedEventSchema } from '../documents/budget/budget.schema';

export const budgetProviders = [
    {
      provide: 'BUDGET_EVENTSTORE',
      useFactory: (connection: Connection) => connection.model('eventStoreSchema', EventStoreSchema, 'budget_eventStore'),
      inject: ['DATABASE_CONNECTION'],
    },
    {
      provide: 'BUDGET_SHORT_VIEW_MODEL',
      useFactory: (connection: Connection) => connection.model('BudgetShortView', BudgetShortViewSchema),
      inject: ['DATABASE_CONNECTION'],
    
    },
    {
      provide: 'HISTORY_VIEW',
      useFactory: (connection: Connection) => connection.model('HistoryShortView', HistoryViewSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ];
  