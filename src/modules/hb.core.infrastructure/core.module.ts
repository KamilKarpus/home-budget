import { Module } from '@nestjs/common';
import { BudgetController } from '../hb.core.api/controllers/budget.controller';
import { DatabaseModule } from './configuration/database.module';
import { budgetProviders } from './providers/budget.provider';
import { BudgetRepository } from './repositories/budget.repository';
;

@Module({
  imports: [DatabaseModule],
  providers: [BudgetRepository, ...budgetProviders],
  controllers: [BudgetController]
})
export class CoreModule {}