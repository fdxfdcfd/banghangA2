import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product/product';

@Component({
    moduleId: module.id,
    selector: 'mod_products_grid',
    templateUrl: 'mod_products_grid.component.html'
})
export class ModProductsGridComponent implements OnInit {
    list_product: Product[];
    constructor() {
        this.list_product = [
            {product_id: '1', product_name: 'white T-Shirt', product_img: 'images/p1.jpg', price: 300},
            {product_id: '2', product_name: 'yellow T-Shirt', product_img: 'images/p2.jpg', price: 500},
            {product_id: '3', product_name: 'black skirt', product_img: 'images/p3.jpg', price: 250},
            {product_id: '4', product_name: 'red dress', product_img: 'images/p4.jpg', price: 450},
            {product_id: '5', product_name: 'gray dress', product_img: 'images/p5.jpg', price: 367},
            {product_id: '7', product_name: 'blue Shirt', product_img: 'images/p6.jpg', price: 352},
        ]
     }

    ngOnInit() { }
}