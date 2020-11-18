import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PassportModule } from '@nestjs/passport';
import { BudgetController } from '../hb.core.api/controllers/budget.controller';
import { BudgetQueryController } from '../hb.core.api/queryControllers/budget.query.controller';
import { CurrenciesQueryController } from '../hb.core.api/queryControllers/currencies.query.controller';
import { CommandHandlers } from '../hb.core.application/commands/commands.index';
import { EventHandlers } from '../hb.core.application/domainEvents';
import { QueryHandlers } from '../hb.core.application/queries/queries.index';
import { JwtStrategy } from './configuration/auth-strategies/auth-strategies';

import { DatabaseModule } from './configuration/database.module';
import { budgetProviders } from './providers/budget.provider';
import { BudgetRepositoryProvider } from './providers/budget.repository.provider';
import { ServicesProviders } from './providers/services.provider';
import { BudgetShortViewService } from './services/budget.short.view.service';

@Module({
  imports: [
    DatabaseModule, 
    CqrsModule,
    PassportModule
  ],
  providers: [
    BudgetRepositoryProvider, 
    BudgetShortViewService,
    ...budgetProviders,
    ...EventHandlers,
    ...CommandHandlers,
    ...QueryHandlers,
    ...ServicesProviders,
    JwtStrategy
  ],
  controllers: [BudgetController,BudgetQueryController, CurrenciesQueryController]
})
export class CoreModule {}