export class Comment{
    id:string;
    content: string;
    email: string;
    user_id: string;
    product_id: string;
    created:number;
    updated:number;
    status: number;
    constructor(id, content, email, user_id, product_id, created, updated, status){
        this.id = id;
        this.content = content;
        this.email = email;
        this.user_id = user_id;
        this.product_id = product_id;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
}