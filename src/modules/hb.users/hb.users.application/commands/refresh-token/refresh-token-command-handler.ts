import { Inject } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { IAuthService } from "../../contracts/auth.service.interface";
import { RefreshTokenCommand } from "./refresh-token-command";

const AuthService = () => Inject('AuthService');
@CommandHandler(RefreshTokenCommand)
export class RefreshTokenCommandHandler implements ICommandHandler<RefreshTokenCommand> {
  constructor(@AuthService() private readonly authService : IAuthService) {}

    async execute(command: RefreshTokenCommand): Promise<any> {
        return await this.authService.refreshCredential(command.refreshToken);
    }

}