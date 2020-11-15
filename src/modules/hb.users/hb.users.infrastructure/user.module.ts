import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from '../hb.users.api/controllers/user.controller';
import { CommandHandlers } from '../hb.users.application/commands';
import { DatabaseModule } from './configuration/database.module';
import { RepositoryProviders } from './providers/repository.provider';
import { ServicesProviders } from './providers/service.provider';
import { usersProviders } from './providers/user.provider';
import { JwtModule } from '@nestjs/jwt';
import { Environment } from 'src/environment';
import { GrantStore } from './services/grant.store.service';


@Module({
  imports: [
    DatabaseModule, 
    CqrsModule,
    JwtModule.register({
      secret: Environment.secret,
      signOptions: { expiresIn: '60s' },
    })
  ],
  providers: [
      ...usersProviders,
      ...ServicesProviders,
      ...CommandHandlers,
      ...RepositoryProviders,
      GrantStore
    ],
  controllers: [UserController]
})
export class UsersModule {}