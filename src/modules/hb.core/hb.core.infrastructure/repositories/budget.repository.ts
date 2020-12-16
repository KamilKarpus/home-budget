import { Inject } from "@nestjs/common";
import { Budget } from "../../hb.core.domain";
import { EventBus } from '@nestjs/cqrs';
import { Guid } from "guid-typescript";
import { IBudgetRepository } from "../../hb.core.domain/repositories/budget.repository.interface";
import { EventStore } from "src/bulding.blocks/infrastructure/event.store";


export class BudgetRepository implements IBudgetRepository
{
    constructor(@Inject("EventStore")
    private _eventStore : EventStore,
    private eventBus : EventBus){
    }

    async create(budget : Budget): Promise<void>{
        const events = budget.getDomainEvents();
        await this._eventStore.commitAsync(Guid.parse(budget["_id"]), budget.getVersion(), events);
        this.eventBus.publishAll(events);
    }

    async update(budget : Budget){
        const events = budget.getDomainEvents();
        await this._eventStore.commitAsync(Guid.parse(budget["_id"]), budget.getVersion(), events);
        this.eventBus.publishAll(events);
    }

    async findById(id: Guid) : Promise<Budget>{
        const events = await this._eventStore.loadAsync(id);
        return Budget.load(events);
    }
}