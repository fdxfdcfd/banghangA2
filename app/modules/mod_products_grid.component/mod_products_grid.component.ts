import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product/product';
import { ProductService } from '../../services/service_product/service_product';

@Component({
    moduleId: module.id,
    selector: 'mod_products_grid',
    templateUrl: 'mod_products_grid.component.html'
})
export class ModProductsGridComponent implements OnInit {
    list_product_display: Product[];
    constructor(private service_product: ProductService) {
        this.service_product.getListProductPromise().then(list => this.list_product_display 
        = list.sort((item1, item2) => item2.updated - item1.updated).slice(0,6));
    }
    ngOnInit() { }
}