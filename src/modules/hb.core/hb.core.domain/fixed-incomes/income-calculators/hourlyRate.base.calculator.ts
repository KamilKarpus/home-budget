import { Money } from "../../money";
import { IIncomeCalculator } from "./income-calulator-interface";

export abstract class HourlyRateBase implements IIncomeCalculator{

    abstract calculateIncome(month : number, year : number, day : number): Money;

    protected getBusinessDaysCount(month : number, year : number, day : number = 0) : number{
        var count = 0;
        var curDate  = new Date(year, month, 1);
        var endDate = new Date(year, month + 1, 0);
        if(day > 0 ){
            curDate = new Date(year, month, day);
            endDate = new Date(year, month+1, day);
        }
        while (curDate <= endDate) {
            var dayOfWeek = curDate.getDay();
            if(!((dayOfWeek == 6) || (dayOfWeek == 0)))
               count++;
            curDate.setDate(curDate.getDate() + 1);
        }
        return count;
    }
}