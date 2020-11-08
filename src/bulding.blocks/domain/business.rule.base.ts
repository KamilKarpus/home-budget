import { HcException } from "./hc.exception";

export abstract class BusinessRule{
    private readonly _exception : HcException;

    constructor(exception : HcException){
        this._exception = exception;
    }

    public throw(){
        throw this._exception;
    }

    public abstract isBroken() : boolean;

}