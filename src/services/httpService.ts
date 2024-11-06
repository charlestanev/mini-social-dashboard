import { fetchUtil } from "../utils/http";

export class HttpService<T> {
    protected apiUrl: string;
    protected data = {} as T;
    protected dataCollection = [] as T[];

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    getAll() {
        return fetchUtil<T[]>(this.apiUrl)
    }
}