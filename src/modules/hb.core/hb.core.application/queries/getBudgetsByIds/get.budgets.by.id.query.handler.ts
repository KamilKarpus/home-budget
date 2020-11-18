import { Inject } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Pagination } from "src/bulding.blocks/application/paggination/pagination";
import { BudgetShortViewService } from "src/modules/hb.core/hb.core.infrastructure/services/budget.short.view.service";
import { BudgetShortView } from "../../read.models/budget.short.view";
import { GetBudgetsByUserIdQuery } from "./get.budgets.by.id.query";

const ShortViewService = () => Inject('BudgetShortViewService');  

@QueryHandler(GetBudgetsByUserIdQuery)
export class GetByBudgesByUserIdQueryHandler implements IQueryHandler<GetBudgetsByUserIdQuery> {
  constructor(@ShortViewService() private readonly service: BudgetShortViewService ) {}

  async execute(query: GetBudgetsByUserIdQuery) {
    const itemsCount = await this.service.getCount(query.UserId);
    const result = await this.service.getManyByUserId(query.UserId, query.pageSize, query.pageNumber);
    return new Pagination<BudgetShortView>(result, itemsCount, query.pageNumber, query.pageSize);
  }
}