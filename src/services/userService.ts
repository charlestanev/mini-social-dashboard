import { User } from "../type/user";
import { HttpService } from "./httpService";

export class UserService extends HttpService<User> {
    constructor(baseUrl: string) {
        super(`${baseUrl}/users`);
    }

    userGetAll() { }
    getSingleUser() { }
}
