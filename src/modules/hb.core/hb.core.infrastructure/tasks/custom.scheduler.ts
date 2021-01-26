import { Inject, Injectable } from "@nestjs/common";
import { Cron, CronExpression, SchedulerRegistry } from "@nestjs/schedule";
import { CronJob } from "cron";
import { IIncomeService } from "../../hb.core.application/contracts/income-service-repository";

const IncomeService = () => Inject('IncomeService');

@Injectable()
export class CustomScheduler{
    constructor(private schedulerRegistry : SchedulerRegistry, 
        @IncomeService() private readonly incomeService : IIncomeService){
    }

    private lastDayOfMonthJobName = "lastDayOfMonth";

    @Cron(CronExpression.EVERY_1ST_DAY_OF_MONTH_AT_MIDNIGHT)
    async scheduleJobEveryLastDayOfMonth(){

        this.schedulerRegistry.deleteCronJob(this.lastDayOfMonthJobName);

        var currentDate = new Date();
        var launchDate = new Date(currentDate.getFullYear(), currentDate.getMonth() +1, 0);
        const job = new CronJob(`0 1 ${launchDate.getDay()} * *`, () =>{
            this.incomeService.lastDayOfMonthIncome();
        })

        this.schedulerRegistry.addCronJob(this.lastDayOfMonthJobName, job);

    }
}