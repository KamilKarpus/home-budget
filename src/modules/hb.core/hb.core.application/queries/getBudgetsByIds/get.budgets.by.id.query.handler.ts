import { Inject } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { BudgetShortViewService } from "src/modules/hb.core/hb.core.infrastructure/services/budget.short.view.service";
import { GetBudgetsByUserIdQuery } from "./get.budgets.by.id.query";

const ShortViewService = () => Inject('BudgetShortViewService');  

@QueryHandler(GetBudgetsByUserIdQuery)
export class GetByBudgesByUserIdQueryHandler implements IQueryHandler<GetBudgetsByUserIdQuery> {
  constructor(@ShortViewService() private readonly service: BudgetShortViewService ) {}

  async execute(query: GetBudgetsByUserIdQuery) {
    return this.service.getManyByUserId(query.UserId);
  }
}