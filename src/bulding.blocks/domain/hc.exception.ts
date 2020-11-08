import { exception } from "console";

export class HcException extends Error{
    
    private _errorNumber : number;

    constructor(errorNumber : number, message: string){
        super(message);
        this._errorNumber = errorNumber; 
    }

    getErrorNumber() : number{
        return this._errorNumber;
    }
}