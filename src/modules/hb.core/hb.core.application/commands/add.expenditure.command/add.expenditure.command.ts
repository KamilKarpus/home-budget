import { Guid } from "guid-typescript";

export class AddExpenditureCommand{
    constructor(public Id: Guid, public Expenditure : number, public Currency : string,
        public Reason: string ) {}
}