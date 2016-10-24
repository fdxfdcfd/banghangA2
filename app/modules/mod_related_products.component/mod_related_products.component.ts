import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product/product';
import { list_product } from '../../model/product/mock_product';
import { ProductService } from '../../services/service_product/service_product';

@Component({
    moduleId: module.id,
    selector: 'mod_related_products',
    templateUrl: 'mod_related_products.component.html'
})
export class ModRelatedProductsComponent implements OnInit {
    list_product_display: Product[];
    constructor(private service_product: ProductService) {
        //cate_id = cate_id của sản phẩm tại trang single
        this.service_product.getListProductPromise().then(list => this.list_product_display 
        = list.filter(item => item.product_cate_id == '2').slice(0,3));
    }
    ngOnInit() { }
}