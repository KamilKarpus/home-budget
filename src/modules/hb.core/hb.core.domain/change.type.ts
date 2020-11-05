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