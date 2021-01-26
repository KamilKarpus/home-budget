import { ApiProperty } from "@nestjs/swagger";

export class FixedIncomeAddDto{
    @ApiProperty()
    public type: number;
    @ApiProperty()
    public budgetId : string;
    @ApiProperty()
    public incomeType : number;
    @ApiProperty()
    public money : number;
    @ApiProperty()
    public description : string;
    @ApiProperty()
    public dayOfIncome : number = 0
}