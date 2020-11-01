export class Money{
    private _value: number;
    private _currency: string;

    constructor(value : number, currency: string) {
        this._value = value;
        this._currency = currency;
    }

    public static Of(value : number, currency : string) : Money{
        return new Money(value, currency);
    }

    public static Default(){
        return new Money(0, "");
    }

    public Add(money : Money) : Money{
        if(money._currency === this._currency && this._currency){
            //throw exception
        }
        return new Money(this._value + money._value, money._currency);
    }

    public GetValue() : number{
        return this._value;
    }

    public GetCurrency() : string{
        return this._currency;
    }
}