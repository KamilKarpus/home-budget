import { Inject } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { IAuthService } from "../../hb.users.application/contracts/auth.service.interface";
import { IPasswordService } from "../../hb.users.application/contracts/password.service.interface";
import { AuthResponse } from "../../hb.users.application/dtos/auth.response";
import { TokenDto } from "../../hb.users.application/dtos/token.dto";
import { UserDto } from "../../hb.users.application/dtos/user.dto";
import { IUserRepository } from "../../hb.users.domain/user.repository.interface";
import { uid } from 'rand-token';
import { GrantStore } from "./grant.store.service";
import { GrantDto } from "src/common/authGuard/grant.dto";
import { Guid } from "guid-typescript";
import { HcException } from "src/bulding.blocks/domain/hc.exception";

const UserRepository = () => Inject("UserRepository");
const PasswordService = () => Inject("PasswordService");
export class AuthService implements IAuthService{

    constructor(@UserRepository() private readonly userRepository : IUserRepository,
                private readonly jwtService : JwtService,
                @PasswordService() private readonly passwordService : IPasswordService,
                private readonly grantStore : GrantStore){}

    public async validateUser(userName : string, password : string) : Promise<AuthResponse>{
        const user = await this.userRepository.getByEmail(userName);
        if(user && user.getId()){
            if(this.passwordService.verifyPassword(user.getPassword(), password)){
                return new AuthResponse(new UserDto(user.getId(), user.getEmail(), user.getFirstName(), 
                user.getLastName()));
            }
        }
        return new AuthResponse(null);
    }

    public generateCredential(user : UserDto) : TokenDto{
        const payload = {
            login: user.Email, sub: user.Id, firstName: user.FirstName, lastName : user.LastName 
        }

        const refreshToken = uid(18);
        this.grantStore.store(new GrantDto(refreshToken, user.Id.toString()));

        return {
            access_token : this.jwtService.sign(payload),
            refresh_token : refreshToken
        }
    }

    public async refreshCredential(refreshToken : string) {
        const grant = await this.grantStore.load(refreshToken);
        if(grant.isConsumed()){
            throw new HcException(1002,"Token is consumed");
        }
        if(grant){
            const user = await this.userRepository.loadById(Guid.parse(grant.SubjectId));
            const userDto = new UserDto(user.getId(), user.getEmail(), user.getFirstName(), 
            user.getLastName());
            grant.consume();
            this.grantStore.update(grant);
            return this.generateCredential(userDto);
        }
        throw new HcException(1003,"Token not found");
    }
}