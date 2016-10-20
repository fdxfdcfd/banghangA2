export class Product{
    product_id: string;
    product_name:string;
    price: number;
    product_img:string;
    brief: string;
    detail: string;
    cate_id: string;
    user_id_updated: number;
    user_id_created: number;
    inventory: number;
    created: number;
    updated: number;
    constructor(id, name, price, img, brief, detail, user_id_updated, user_id_created, inventory, created, updated){
        this.product_id = id;
        this.product_name = name;
        this.price = price;
        this.product_img = img;
        this.brief = brief;
        this.detail = detail;
        this.user_id_updated = user_id_updated;
        this.user_id_created = user_id_created;
        this.inventory = inventory;
        this.created = created;
        this.updated = updated;
    }
}