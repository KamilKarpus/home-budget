import { Connection } from 'mongoose';
import { BudgetSchema } from '../documents/budget/budget.schema';

export const budgetProviders = [
    {
      provide: 'BUDGET_MODEL',
      useFactory: (connection: Connection) => connection.model('Budget', BudgetSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ];
  