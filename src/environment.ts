export class Environment{
    public static CoreDbConnectionString = process.env.dbConnectionString;
    public static secret = process.env.secret;
    public static currencyApi = process.env.currencyApi;
}