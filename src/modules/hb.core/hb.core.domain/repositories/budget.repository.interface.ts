import { Guid } from "guid-typescript";
import { Budget } from "..";

export interface IBudgetRepository{
    create(budgetToAdd : Budget): Promise<void>
    update(budget : Budget);
    findById(id: Guid) : Promise<Budget>
}