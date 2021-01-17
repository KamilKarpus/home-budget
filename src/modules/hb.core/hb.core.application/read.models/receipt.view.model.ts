import { Guid } from "guid-typescript";

export class ReceiptViewModel{
    public id : string;
    public budgetId : string;
    public transactionId : string;
    public fileUrls : string[];


    constructor(){

    }

    public static create(budgetId : string, transactionId : string) : ReceiptViewModel{
        var viewModel = new this();
        viewModel.id = Guid.create().toString();
        viewModel.budgetId = budgetId;
        viewModel.transactionId = transactionId;
        viewModel.fileUrls = [];
        return viewModel;
    }  
    
}