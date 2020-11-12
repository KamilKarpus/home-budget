
import { AuthResponse } from "../dtos/auth.response";
import { TokenDto } from "../dtos/token.dto";
import { UserDto } from "../dtos/user.dto";

export interface IAuthService{
    generateCredential(user : UserDto) : TokenDto;
    validateUser(userName : string, password : string) : Promise<AuthResponse>
}