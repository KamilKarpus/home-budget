import { ApiProperty } from "@nestjs/swagger";

export class ExpenditureDto{
    @ApiProperty()
    Expenditure : number;
    @ApiProperty()
    Reason: string;

}