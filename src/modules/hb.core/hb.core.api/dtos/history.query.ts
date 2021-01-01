import { ApiProperty } from "@nestjs/swagger";

export class HistoryQuery{
    @ApiProperty()
    pageNumber : number;
    @ApiProperty()
    pageSize : number;
}