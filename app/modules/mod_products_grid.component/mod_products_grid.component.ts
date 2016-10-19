import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product/product';
import { list_product } from '../../model/product/mock_product';
import { ProductService } from '../../services/service_product';

@Component({
    moduleId: module.id,
    selector: 'mod_products_grid',
    templateUrl: 'mod_products_grid.component.html'
})
export class ModProductsGridComponent implements OnInit {
    list_product_display: Product[];
    constructor(service_product: ProductService) {
        this.list_product_display = service_product.getListProduct();
    }
    ngOnInit() { }
}