import { UserDetails } from "../type/user";
import { HttpService } from "./httpService";

export class UserService extends HttpService<UserDetails> {
    constructor(baseUrl: string) {
        super(`${baseUrl}/users`);
    }

    getSingleUser() { }
}
