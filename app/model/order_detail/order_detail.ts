export class OrderDetail{
    id:string;
    order_id: number;
    product_id: number;
    product_name: string;
    quantity: number;
    price: number;
    total_money: number;
    created:number;
    updated:number;
    status: number;
    constructor(id, order_id, product_id, product_name, quantity, price, total_money, created, updated, status){
        this.id = id;
        this.order_id = order_id;
        this.product_id = product_id;
        this.product_name = product_name;
        this.quantity = quantity;
        this.price = price;
        this.total_money = total_money;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
}