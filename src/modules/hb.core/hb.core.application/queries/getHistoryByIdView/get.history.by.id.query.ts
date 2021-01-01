import { Guid } from "guid-typescript";

export class GetHistoryByIdQuery{
    constructor(public Id: Guid, public pageNumber : number, public pageSize : number){
    }
}