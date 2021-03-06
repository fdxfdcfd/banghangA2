export class Product{
    id: number;
    name:string;
    price: number;
    price_sale: number;
    img:string;
    brief: string;
    detail: string;
    product_cate_id: number;
    partner_id: number;
    inventory: number;
    views: number;
    created: number;
    updated: number;
    state: string;
    status: number;
    constructor(id, name, price, price_sale, img, brief, detail, inventory, state,
     views, partner_id, product_cate_id, created, updated, status) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.price_sale = price_sale;
        this.img = img;
        this.brief = brief;
        this.detail = detail;
        this.product_cate_id = product_cate_id;
        this.partner_id = partner_id;
        this.views = views;
        this.state = state;
        this.inventory = inventory;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
}