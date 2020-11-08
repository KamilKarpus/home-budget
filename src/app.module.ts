import { Module } from '@nestjs/common';

import { CoreModule } from './modules/hb.core/hb.core.infrastructure/core.module';

@Module({
  imports: [CoreModule],
})
export class AppModule {}
