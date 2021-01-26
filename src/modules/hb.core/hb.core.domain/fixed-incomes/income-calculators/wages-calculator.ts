import { Money } from "../../money";
import { HourlyRateBase } from "./hourlyRate.base.calculator";



export class WagesCalculator extends HourlyRateBase{
    private _hourlyRate : number;
    private _currency : string;

    constructor(hourlyRate : number, currency : string) {
        super();
        this._hourlyRate = hourlyRate;
        this._currency = currency;
    }

    public calculateIncome(month : number, year : number, day : number): Money {
        var workingDays = this.getBusinessDaysCount(month, year, day);
        let workingHours = workingDays * 8;
        return new Money(this._hourlyRate * workingHours, this._currency);
    }

}