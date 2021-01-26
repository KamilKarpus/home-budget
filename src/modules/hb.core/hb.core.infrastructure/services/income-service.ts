import { Inject } from "@nestjs/common/decorators";
import { Guid } from "guid-typescript";
import { IIncomeService } from "../../hb.core.application/contracts/income-service-repository";
import { FixedIncome } from "../../hb.core.domain/fixed-incomes/fixed.income";
import { FixedTypesDays } from "../../hb.core.domain/fixed.day.types";
import { IBudgetRepository } from "../../hb.core.domain/repositories/budget.repository.interface";
import { IFixedIncomeRepository } from "../../hb.core.domain/repositories/fixed-income-repository.interface";

const FixedIncomeRepository = () => Inject('FixedIncomeRepository');
const BudgetRepository = () => Inject('BudgetRepository');

export class IncomeService implements IIncomeService{
    constructor(
    @FixedIncomeRepository() private readonly incomeRepository : IFixedIncomeRepository,
    @BudgetRepository() private readonly budgetRepository : IBudgetRepository){
        
    }

    public async consumeById(incomeTypeId : number, month : number, year : number, day: number = 0) : Promise<void>{
        var incomes = await this.getIncomes(incomeTypeId, day);
        for (const iterator of incomes) {
            var budget = await this.budgetRepository.findById(Guid.parse(iterator.getBudgetId()));
            iterator.consume(budget, month, year);
            await this.budgetRepository.update(budget);
        }
    }


    private async getIncomes(incomeTypeId : number, day : number) : Promise<FixedIncome[]>{
        if(day === 0 || !day){
            return await this.incomeRepository.getByTypeId(incomeTypeId);
        }else{
            return await this.incomeRepository.getByTypeIdAndDays(incomeTypeId, day);
        }
    }

    async dailyIncome(){
        var currentDate = new Date();
        await this.consumeById(FixedTypesDays.dailyId, currentDate.getMonth(),
                currentDate.getFullYear(), currentDate.getDay());
    }
    

    async firstDayOfMonthIncome(){
        var currentDate = new Date();
        await this.consumeById(FixedTypesDays.firstDayOfMonthId, currentDate.getMonth()-1,
        currentDate.getFullYear(), currentDate.getDay());
    }
    
    async fixedIncome(){
        var currentDate = new Date();
        await this.consumeById(FixedTypesDays.fixedId, currentDate.getMonth(),
        currentDate.getFullYear(), currentDate.getDay());
    }

    async lastDayOfMonthIncome(){
        var currentDate = new Date();
        await this.consumeById(FixedTypesDays.lastDayOfMonthId, currentDate.getMonth(),
        currentDate.getFullYear(), currentDate.getDay());
    }



}
