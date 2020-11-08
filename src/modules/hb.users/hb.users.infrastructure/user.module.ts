import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from '../hb.users.api/controllers/user.controller';
import { CommandHandlers } from '../hb.users.application/commands';
import { DatabaseModule } from './configuration/database.module';
import { RepositoryProviders } from './providers/repository.provider';
import { ServicesProviders } from './providers/service.provider';
import { usersProviders } from './providers/user.provider';


@Module({
  imports: [DatabaseModule, CqrsModule],
  providers: [
      ...usersProviders,
      ...ServicesProviders,
      ...CommandHandlers,
      ...RepositoryProviders
    ],
  controllers: [UserController]
})
export class UsersModule {}