import { ApiProperty } from '@nestjs/swagger';

export class AddBudgetDto{
    @ApiProperty()
    name: string;
    @ApiProperty()
    currency: string;
}