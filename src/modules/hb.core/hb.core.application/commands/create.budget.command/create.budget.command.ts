export class CreateBudgetCommand{
    constructor(public Name: string, 
        public OwnerId : string,
        public Currency : string){}
}