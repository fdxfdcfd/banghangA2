"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var service_product_1 = require('../../services/service_product');
var ModRelatedProductsComponent = (function () {
    function ModRelatedProductsComponent(service_product) {
        var _this = this;
        this.service_product = service_product;
        //cate_id = cate_id của sản phẩm tại trang single
        this.service_product.getListProductPromise().then(function (list) { return _this.list_product_display
            = list.filter(function (item) { return item.cate_id == '2'; }).slice(0, 3); });
    }
    ModRelatedProductsComponent.prototype.ngOnInit = function () { };
    ModRelatedProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mod_related_products',
            templateUrl: 'mod_related_products.component.html'
        }), 
        __metadata('design:paramtypes', [service_product_1.ProductService])
    ], ModRelatedProductsComponent);
    return ModRelatedProductsComponent;
}());
exports.ModRelatedProductsComponent = ModRelatedProductsComponent;
//# sourceMappingURL=mod_related_products.component.js.map