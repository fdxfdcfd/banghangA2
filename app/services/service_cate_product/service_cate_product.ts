import { Injectable } from '@angular/core';
import { CateProduct } from '../../model/cate_product/cate_product';
import { list_cate_product } from '../../model/cate_product/mock_cate_product';

@Injectable()
export class CateProductService {

    constructor() { }

    getListCateProduct() {
        return list_cate_product;
    }

    getListCateProductPromise():Promise<CateProduct[]> {
        return Promise.resolve(list_cate_product);
    }
}