import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../model/product/product';
import { ProductService } from '../../services/service_product/service_product';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'mod_list_products',
    templateUrl: 'mod_list_products.component.html'
})
export class ModListProductsComponent implements OnInit {
    list_product_display: Product[];
    constructor(private service_product: ProductService, private router: Router,
        private route: ActivatedRoute, private location: Location) {
        //Sắp xếp giá tăng dần
        this.service_product.getListProductPromise().then(
            list => this.list_product_display = list.sort((item1, item2) => item1.price - item2.price)
        );
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.service_product.getListProductPromise().then(
                list => this.list_product_display = list.filter(item => item.product_cate_id == id)
            );
        });
    }

    gotoDetail(product: Product): void {
        let link = ['/single', product.id];
        this.router.navigate(link);
    }


}