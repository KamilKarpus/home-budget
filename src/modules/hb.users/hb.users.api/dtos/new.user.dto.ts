import { ApiProperty } from "@nestjs/swagger";

export class NewUserDto{
    @ApiProperty()
    email : string;
    @ApiProperty() 
    password : string;
    @ApiProperty()
    firstName: string;
    @ApiProperty()
    lastName: string;

}