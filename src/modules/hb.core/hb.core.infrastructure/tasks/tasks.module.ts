import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CustomScheduler } from './custom.scheduler';
import { IncomeJobService } from './income.job.service';

@Module({
    imports:[
        ScheduleModule.forRoot()
    ],
    providers:[
        IncomeJobService,
        CustomScheduler
    ]
})
export class TaskModule {}