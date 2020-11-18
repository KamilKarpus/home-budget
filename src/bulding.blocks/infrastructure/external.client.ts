import axios from 'axios';
import { IExternalClient } from '../application/external.client.interface';

export class ExternalClient implements IExternalClient{

    public async getAsync<T>(apiUrl : string, params : string = "") : Promise<T> {
        const response = await axios.get<T>(apiUrl + params);
        return response.data;

    }
}