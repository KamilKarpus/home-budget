import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/common/authGuard/auth.guard";
import { GetReceiptByTransactionIdQuery } from "../../hb.core.application/queries/getReceiptByTransactionId/get.receipt.by.transaction.id";
import { ReceiptViewModel } from "../../hb.core.application/read.models/receipt.view.model";

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('receipts')
export class ReceiptQueryController{
    constructor(private readonly queryBus: QueryBus ){

    }

    @Get(":id")
    async findById(@Param('id') id: string) : Promise<ReceiptViewModel>{
        const result = await this.queryBus.execute(new GetReceiptByTransactionIdQuery(id));
        return result;
    }
}