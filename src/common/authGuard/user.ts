import { Guid } from "guid-typescript";

export class User{
    public userId: string; 
    public login: string; 
    public firstName : string; 
    public lastName : string;

    public getId() : Guid{
        return Guid.parse(this.userId);
    }
}