export interface IExternalClient{
    getAsync<T>(apiUrl : string,params: string) : Promise<T>;
}