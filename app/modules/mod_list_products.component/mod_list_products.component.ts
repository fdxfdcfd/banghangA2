import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product/product';
import { list_product } from '../../model/product/mock_product';
import { ProductService } from '../../services/service_product';

@Component({
    moduleId: module.id,
    selector: 'mod_list_products',
    templateUrl: 'mod_list_products.component.html'
})
export class ModListProductsComponent implements OnInit {
    list_product_display: Product[];
    constructor(private service_product: ProductService) {
        //Sắp xếp giá tăng dần
        this.service_product.getListProductPromise().then(list => this.list_product_display = list.sort((item1, item2) => item1.price - item2.price));
     }
    ngOnInit() { }
}