import {User} from "./User";

export class UserLogin {
    id: number;
    branch_id: number;
    active: number;
    first_update: number;
    last_update: number;
    user_login_user_id: number;
    user_login_password: string;
    user_login_auth: string;
    user_login_otp: string;
    user_login_user: User;
}
