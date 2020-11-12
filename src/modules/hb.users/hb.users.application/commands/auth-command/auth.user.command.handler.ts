import { Inject, UnauthorizedException } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { IAuthService } from "../../contracts/auth.service.interface";
import { AuthCommand } from "./auth.user.command";


const AuthService = () => Inject('AuthService');
@CommandHandler(AuthCommand)
export class AuthCommandHandlder implements ICommandHandler<AuthCommand> {
  constructor(@AuthService() private readonly authService : IAuthService) {}

    async execute(command: AuthCommand): Promise<any> {
        const result =  await this.authService.validateUser(command.email, command.password);  
        if(result.IsAuthenticated){
            return this.authService.generateCredential(result.UserDto);
        }  
        throw new UnauthorizedException();
    }

}