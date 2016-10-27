import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product/product';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../../services/service_product/service_product';


@Component({
    moduleId: module.id,
    selector: 'mod_detail_product',
    templateUrl: 'mod_detail_product.component.html'
})
export class ModDetailProductComponent implements OnInit {
    constructor(
        private service_product: ProductService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    @Input() product: Product;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.service_product.getProduct(id)
                .then(product => this.product = product);
        });
    }
}