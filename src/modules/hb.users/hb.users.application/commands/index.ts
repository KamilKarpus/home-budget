import { AuthCommandHandlder } from "./auth-command/auth.user.command.handler";
import { RefreshTokenCommandHandler } from "./refresh-token/refresh-token-command-handler";
import { RegisterUserCommandHandlder } from "./register-user/register.user.command.handler";

export const CommandHandlers = [RegisterUserCommandHandlder, AuthCommandHandlder,
RefreshTokenCommandHandler];