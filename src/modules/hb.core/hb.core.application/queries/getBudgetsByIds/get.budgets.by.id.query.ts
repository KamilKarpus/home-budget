import { Guid } from "guid-typescript";

export class GetBudgetsByUserIdQuery{
    constructor(public UserId: Guid, public pageSize : number = 15,public pageNumber : number = 1){
    }
}