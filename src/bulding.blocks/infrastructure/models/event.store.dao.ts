import { Document } from 'mongoose';

export interface EventStoreDao{
    id : string;
    data : string;
    version : number;
    createdAt : Date;
    name : string;
    aggregateId: string;
}

export type EventDocument = EventStoreDao & Document;