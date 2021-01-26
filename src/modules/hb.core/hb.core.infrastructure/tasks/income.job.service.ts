import { Inject, Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { IIncomeService } from "../../hb.core.application/contracts/income-service-repository";

const IncomeService = () => Inject('IncomeService');

@Injectable()
export class IncomeJobService{
    constructor(@IncomeService() private readonly incomeService : IIncomeService){

    }

    @Cron(CronExpression.EVERY_DAY_AT_2AM)
    async daily(){
        await this.incomeService.dailyIncome();
    }
    

    @Cron(CronExpression.EVERY_1ST_DAY_OF_MONTH_AT_MIDNIGHT)
    async firstDayOfMonth(){
        await this.incomeService.firstDayOfMonthIncome();
    }
    
    @Cron(CronExpression.EVERY_DAY_AT_2AM)
    async fixed(){
        await this.incomeService.dailyIncome();
    }


}