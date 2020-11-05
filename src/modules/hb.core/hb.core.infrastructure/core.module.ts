import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { BudgetController } from '../hb.core.api/controllers/budget.controller';
import { BudgetQueryController } from '../hb.core.api/queryControllers/budget.query.controller';
import { CommandHandlers } from '../hb.core.application/commands/commands.index';
import { EventHandlers } from '../hb.core.application/domainEvents';
import { QueryHandlers } from '../hb.core.application/queries/queries.index';

import { DatabaseModule } from './configuration/database.module';
import { budgetProviders } from './providers/budget.provider';
import { BudgetRepository } from './repositories/budget.repository';
import { BudgetShortViewService } from './services/budget.short.view.service';
;

@Module({
  imports: [DatabaseModule, CqrsModule],
  providers: [
    BudgetRepository, 
    BudgetShortViewService,
    ...budgetProviders,
    ...EventHandlers,
    ...CommandHandlers,
    ...QueryHandlers
  ],
  controllers: [BudgetController,BudgetQueryController]
})
export class CoreModule {}