export interface IMap<Entity, Model>{
    map(entity : Entity) : Model;
}