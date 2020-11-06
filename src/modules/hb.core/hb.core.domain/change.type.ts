

export class ChangeType{
    private _id : number;
    private _name : string;


    constructor(id : number, name : string){
        this._id = id;
        this._name = name;
    }

    public static Created : ChangeType = new ChangeType(1, "Created");
    public static Income : ChangeType = new ChangeType(2, "Income");
    public static Expenditure : ChangeType = new ChangeType(3, "Expenditure");

    private static _types = [ChangeType.Created, ChangeType.Income, ChangeType.Expenditure];

    public static getTypebyId(id: number) : ChangeType{
        return this._types.find(p=>p._id === id);
    }

    public getId() : number{
        return this._id;
    }

    public getName() : string{
        return this._name;
    }

    public equal(type : ChangeType) : boolean{
        return this._id === type.getId();
    }

}