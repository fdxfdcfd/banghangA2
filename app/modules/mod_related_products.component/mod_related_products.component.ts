import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product/product';

@Component({
    moduleId: module.id,
    selector: 'mod_related_products',
    templateUrl: 'mod_related_products.component.html'
})
export class ModRelatedProductsComponent implements OnInit {
    list_product: Product[];
    constructor() {
        this.list_product = [
            {product_id: '1', product_name: 'white T-Shirt', product_img: 'images/p1.jpg', price: 300},
            {product_id: '2', product_name: 'yellow T-Shirt', product_img: 'images/p2.jpg', price: 500},
            {product_id: '3', product_name: 'black skirt', product_img: 'images/p3.jpg', price: 250},
        ]
     }
    ngOnInit() { }
}