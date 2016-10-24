import { Injectable } from '@angular/core';
import { Product } from '../../model/product/product';
import { list_product } from '../../model/product/mock_product';

@Injectable()
export class ProductService {

    constructor() { }

    getListProduct() {
        return list_product;
    }

    getListProductPromise():Promise<Product[]> {
        return Promise.resolve(list_product);
    }
}