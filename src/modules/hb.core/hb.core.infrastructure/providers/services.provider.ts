import { ExternalClient } from "src/bulding.blocks/infrastructure/external.client";
import { BudgetShortViewService } from "../services/budget.short.view.service";
import { HistoryService } from "../services/history.view.service";
import { ReceiptViewModelService } from "../services/receipt.view.model.service";

export const ServicesProviders = [
    {
        provide: 'HistoryService',
        useClass: HistoryService
    },
    {
        provide: 'BudgetShortViewService',
        useClass: BudgetShortViewService
    },
    {
        provide: "ExternalClient",
        useClass: ExternalClient
    },
    {
        provide: "ReceiptViewModelService",
        useClass: ReceiptViewModelService
    },
];