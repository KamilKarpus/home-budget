export class AddFixedIncomeCommand{
    
    constructor(
        public type: number,
        public budgetId : string,
        public incomeType : number,
        public money : number,
        public description : string,
        public dayOfIncome : number = 0){
    }
}