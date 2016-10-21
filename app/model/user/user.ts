export class User{
    user_id: number;
    firstname: string;
    lastname:string;
    email:string;
    username:string;
    password_salt: string;
    password: string;
    user_category_id: number;
    user_img:string;
    status: number;
    team_id:number;
    level: number;
    lead_id:number;
    last_login_ip:string;
    last_login:number;
    user_updated_id: number;
    user_created_id: number;
    created: number;
    updated: number;
    constructor(){
    }
}