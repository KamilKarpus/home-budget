import { Guid } from "guid-typescript";

export class AddIncomeCommand{
    constructor(public Id: Guid, public Income : number,
        public Reason: string ) {}
}