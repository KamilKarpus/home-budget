import { Guid } from "guid-typescript";
import { UserDto } from "./user.dto";


export class AuthResponse{
    public IsAuthenticated : boolean;
    public UserDto : UserDto;


    constructor(userDto : UserDto){
        if(userDto && userDto.Id){
            this.IsAuthenticated = true;
            this.UserDto = userDto;
        }
        else{
            this.IsAuthenticated = false;
        }

    }

}