import { BusinessRuleAsync } from "src/bulding.blocks/domain/business.rule.async.base";
import { EmailMustBeUniqueException } from "../exceptions/email.must.be.unqiue.exception";
import { IUserEmailUniqueness } from "../user.email.uniqueness.inferface";

export class EmailMustBeUniqueBussinessRule extends BusinessRuleAsync{

    private readonly _userEmailUniquness : IUserEmailUniqueness
    private readonly _userEmail : string;
    constructor(userEmailUniqueness : IUserEmailUniqueness,
        userEmail : string){
        super(new EmailMustBeUniqueException());
        this._userEmailUniquness = userEmailUniqueness;
        this._userEmail = userEmail; 
    }

    
    public async isBroken(): Promise<boolean> {
        return !await this._userEmailUniquness.isEmailUnique(this._userEmail);
    }

}