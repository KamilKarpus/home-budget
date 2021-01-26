export class IncomeType{
    private _id : number;
    private _name : string;

    constructor(id : number, name : string){
        this._id = id;
        this._name = name;
    }

    public static wagesId : number = 1;
    public static salaryId : number = 2;

    public static wages : IncomeType = new IncomeType(IncomeType.wagesId, "wages");
    public static salary : IncomeType = new IncomeType(IncomeType.salaryId, "salary");
    private static _types : IncomeType[] = [IncomeType.wages, IncomeType.salary];

    public static from(id){
        return this._types.filter(p=>p._id === id)[0];
    }

    public equal(type : IncomeType) : boolean{
        return this._id == type._id;
    }

    public getId() : number{
        return this._id;
    }
}