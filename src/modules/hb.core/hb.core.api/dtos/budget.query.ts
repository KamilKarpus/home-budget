import { ApiProperty } from "@nestjs/swagger";

export class BudgetQuery{
    @ApiProperty()
    pageNumber : number;
    @ApiProperty()
    pageSize : number;
}