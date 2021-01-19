import { Inject } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { IReceiptViewModelService } from "../../contracts/receipt.view.model.interface";
import { GetReceiptByTransactionIdQuery } from "./get.receipt.by.transaction.id";

const ModelViewService = () => Inject('ReceiptViewModelService');

@QueryHandler(GetReceiptByTransactionIdQuery)
export class GetReceiptByTransactionIdQueryHandler implements IQueryHandler<GetReceiptByTransactionIdQuery>{
    
    constructor(@ModelViewService() private modelViewService: IReceiptViewModelService){
    }

    async execute(query: GetReceiptByTransactionIdQuery): Promise<any> {
        return await this.modelViewService.findByTransactionId(query.transactionId);
    }

}