import { fetchUtil } from "../utils/http";

export class HttpService<T> {
    protected apiUrl: string;
    data = {} as T;
    dataCollection = [] as T[];

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    getAll() {
        fetchUtil<T[]>(this.apiUrl)
    }
}