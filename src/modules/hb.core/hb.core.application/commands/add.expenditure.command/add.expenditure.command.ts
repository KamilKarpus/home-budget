import { Guid } from "guid-typescript";

export class AddExpenditureCommand{
    constructor(public Id: Guid, public Expenditure : number,
        public Reason: string, public files : Express.Multer.File[]) {}
}