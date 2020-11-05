import { Guid } from "guid-typescript";
import { stringify } from "querystring";

export class DomainEventBase{
    private _id : Guid;
    private _occuredDate: Date;

    constructor(){
        this._id = Guid.create();
        this._occuredDate = new Date();
    }

    public getId() : Guid{
        return this._id;
    }
    public getDate() : Date{
        return this._occuredDate;
    }
}