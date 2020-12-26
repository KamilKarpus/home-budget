import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppLoggerMiddleware } from './common/middleware/loggerMiddleware';

import { CoreModule } from './modules/hb.core/hb.core.infrastructure/core.module';
import { UsersModule } from './modules/hb.users/hb.users.infrastructure/user.module';

@Module({
  imports: [
    CoreModule,
    UsersModule
  ],
})
export class AppModule implements NestModule{

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
