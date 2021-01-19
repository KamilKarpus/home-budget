export class GetReceiptByTransactionIdQuery{
    public transactionId : string;

    constructor(id : string){
        this.transactionId = id;
    }
}