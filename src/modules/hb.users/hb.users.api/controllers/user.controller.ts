import { Body, Controller, Post } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { Created } from "src/common/responses/created";
import { AuthCommand } from "../../hb.users.application/commands/auth-command/auth.user.command";
import { RegisterUserCommand } from "../../hb.users.application/commands/register-user/register.user.command";
import { LoginDto } from "../dtos/login.dto";
import { NewUserDto } from "../dtos/new.user.dto";

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
}