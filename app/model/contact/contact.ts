export class Contact{
    id:string;
    name:string;
    title:string;
    content:string;
    created:number;
    updated:number;
    user_updated:number;
    status: number;
    constructor(id, name, title, content, created, updated, user_updated, status) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.content = content;
        this.created = created;
        this.updated = updated;
        this.created = created;
        this.status = status;
    }
}