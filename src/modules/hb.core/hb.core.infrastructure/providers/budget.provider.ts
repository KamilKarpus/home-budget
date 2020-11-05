import { Connection } from 'mongoose';
import { BudgetShortViewSchema } from '../documents/budget.readmodel/budget.view.schema';
import { BudgetSchema } from '../documents/budget/budget.schema';

export const budgetProviders = [
    {
      provide: 'BUDGET_MODEL',
      useFactory: (connection: Connection) => connection.model('Budget', BudgetSchema),
      inject: ['DATABASE_CONNECTION'],
    },
    {
      provide: 'BUDGET_SHORT_VIEW_MODEL',
      useFactory: (connection: Connection) => connection.model('BudgetShortView', BudgetShortViewSchema),
      inject: ['DATABASE_CONNECTION'],
    
    }
  ];
  