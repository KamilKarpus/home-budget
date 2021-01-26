import { Connection } from "mongoose";
import { FixedIncomeSchema } from "../documents/fixed-income/fixed-icome-document";
import { IncomeService } from "../services/income-service";

export const FixedIncomeProviders = [
    {
      provide: 'FIXED_INCOME_MODEL',
      useFactory: (connection: Connection) => connection.model('FixedIncomeSolidDocument', FixedIncomeSchema, 'fixedIncome'),
      inject: ['DATABASE_CONNECTION'],
    },
    {
      provide: 'IncomeService',
      useClass: IncomeService
    }
  ];