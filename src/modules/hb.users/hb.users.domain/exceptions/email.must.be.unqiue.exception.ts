import { HcException } from "src/bulding.blocks/domain/hc.exception";

export class EmailMustBeUniqueException extends HcException{

    constructor(){
        super(1001, "User email must be unique");
    }
}