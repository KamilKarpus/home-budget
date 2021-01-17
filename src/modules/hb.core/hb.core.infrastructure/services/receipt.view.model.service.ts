import { Inject, Injectable } from "@nestjs/common/decorators";
import { Model } from "mongoose";
import { IReceiptViewModelService } from "../../hb.core.application/contracts/receipt.view.model.interface";
import { ReceiptViewModel } from "../../hb.core.application/read.models/receipt.view.model";
import { ReceiptViewModelDocument } from "../documents/budget.readmodel/receipt.view.schema";

@Injectable()
export class ReceiptViewModelService implements IReceiptViewModelService{

    constructor(@Inject("RECEIPT_VIEW")
    private model : Model<ReceiptViewModelDocument>){

    }

    async add(viewModel: ReceiptViewModel): Promise<void> {
        await this.model.insertMany(viewModel);
    }
    async findByTransactionId(transactionId: string): Promise<ReceiptViewModel> {
        return await this.model.findOne({transactionId : transactionId});
    }


}