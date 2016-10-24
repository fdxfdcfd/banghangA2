export class CateProduct{
    id:string;
    name: string;
    detail: string;
    created:number;
    updated:number;
    status: number;
    constructor(id, name, detail, created, updated, status){
        this.id = id;
        this.name = name;
        this.detail = detail;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
}