import { ApiProperty } from '@nestjs/swagger';

export class AddIncomeDto{
    @ApiProperty()
    Income : number;
    @ApiProperty()
    Reason: string;

}