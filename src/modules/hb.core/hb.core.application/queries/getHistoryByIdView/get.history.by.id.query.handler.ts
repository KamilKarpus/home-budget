import { Inject } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { IHistoryService } from "../../contracts/history.service.interface";
import { GetHistoryByIdQuery } from "./get.history.by.id.query";

const HistoryService = () => Inject('HistoryService');  

@QueryHandler(GetHistoryByIdQuery)
export class GetHistoryByIdQueryHandler implements IQueryHandler<GetHistoryByIdQuery> {
  constructor(@HistoryService() private readonly service: IHistoryService ) {}

  async execute(query: GetHistoryByIdQuery) {
    return this.service.findByBalanceId(query.Id);
  }
}