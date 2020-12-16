import { Guid } from "guid-typescript";
import { stringify } from "querystring";

export class DomainEventBase{
    public id : string;
    public occuredDate: Date;
    public type : string;

    constructor(type : string){
        this.id = Guid.create().toString();
        this.occuredDate = new Date();
        this.type = type;
    }

}