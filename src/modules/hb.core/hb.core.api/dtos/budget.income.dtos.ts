import { ApiProperty } from '@nestjs/swagger';

export class AddIncomeDto{
    @ApiProperty()
    Income : number;
    @ApiProperty() 
    Currency : string;
    @ApiProperty()
    Reason: string;

}