import { Guid } from "guid-typescript";

export class UserDto{
    constructor(public Id : Guid, 
        public Email: string,
        public FirstName : string,
        public LastName : string
        ){} 
}