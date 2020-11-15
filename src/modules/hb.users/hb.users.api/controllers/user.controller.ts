import { Body, Controller, Post } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { Created } from "src/common/responses/created";
import { AuthCommand } from "../../hb.users.application/commands/auth-command/auth.user.command";
import { RefreshTokenCommand } from "../../hb.users.application/commands/refresh-token/refresh-token-command";
import { RegisterUserCommand } from "../../hb.users.application/commands/register-user/register.user.command";
import { LoginDto } from "../dtos/login.dto";
import { NewUserDto } from "../dtos/new.user.dto";
import { RefreshTokenDto } from "../dtos/refresh.dto";

@Controller('users')
export class UserController{
    constructor(private commandBus: CommandBus){

    }

    @Post("register")
    async create(@Body() newUser : NewUserDto){
        const id =await this.commandBus.execute(new RegisterUserCommand(newUser.email,
            newUser.password, newUser.firstName, newUser.lastName));
            return new Created(id.value); 
    }

    @Post("connect/token")
    async login(@Body() loginDto : LoginDto){
        const token = await this.commandBus.execute(new AuthCommand(loginDto.email, loginDto.password));
        return token;
    }

    @Post("connect/refresh")
    async refresh(@Body() tokenDto : RefreshTokenDto){
        const token = await this.commandBus.execute(new RefreshTokenCommand(tokenDto.refresh_token));
        return token;
    }
}