import { ReceiptViewModel } from "../read.models/receipt.view.model";

export interface IReceiptViewModelService{
    add(viewModel : ReceiptViewModel) : Promise<void>
    findByTransactionId(transactionId : string) : Promise<ReceiptViewModel>;
}