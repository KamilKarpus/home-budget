import { Guid } from "guid-typescript";

export class DomainEventBase{
    private _id : Guid;
    private _occuredDate: Date;

    constructor(){
        this._id = Guid.create();
        this._occuredDate = new Date();
    }

    public GetId() : Guid{
        return this._id;
    }
    public GetDate() : Date{
        return this._occuredDate;
    }
}