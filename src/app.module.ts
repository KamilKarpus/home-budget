import { Module } from '@nestjs/common';

import { CoreModule } from './modules/hb.core/hb.core.infrastructure/core.module';
import { UsersModule } from './modules/hb.users/hb.users.infrastructure/user.module';

@Module({
  imports: [
    CoreModule,
    UsersModule
  ],
})
export class AppModule {}
