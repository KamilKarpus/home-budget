import { ITaxPolicies } from "./i-tax-policies";

export class PolishIncomeTaxPolicies implements ITaxPolicies{

    constructor(){

    }

    getTaxRate(): number {
        throw new Error("Method not implemented.");
    }

}