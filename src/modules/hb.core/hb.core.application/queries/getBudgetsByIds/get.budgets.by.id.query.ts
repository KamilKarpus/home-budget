import { Guid } from "guid-typescript";

export class GetBudgetsByUserIdQuery{
    constructor(public UserId: Guid){
    }
}