export class Customer{
    id: string;
    username:string;
    password: string;
    password_salt: string;
    email:string;
    address: string;
    phone: string;
    first_name: string;
    last_name:string;
    img:string;
    last_login:number;
    created: number;
    updated: number;
    status: number;
    constructor(id, first_name, last_name, username, password, password_salt, email, address, phone, img, last_login, created, updated, status){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.password = password;
        this.password_salt = password_salt;
        this.img = img;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.last_login = last_login;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
}