import { fetchUtil } from "../utils/http";

export class HttpService<T> {
    protected apiUrl: string;
    protected data = {} as T;
    protected dataCollection = [] as T[];

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    create(data: T) {
        return fetchUtil<T>(this.apiUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }


    getAll(): Promise<T[]> {
        return fetchUtil<T[]>(this.apiUrl) as Promise<T[]>;
    }

    getOne(id: number) {
        return fetchUtil<T>(`${this.apiUrl}/${id}`) as Promise<T>;
    }

    update(id: number, data: T) {
        return fetchUtil<T>(`${this.apiUrl}/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    delete(id: number) {
        return fetchUtil<T>(`${this.apiUrl}/${id}`, {
            method: "DELETE",
        });
    }
}