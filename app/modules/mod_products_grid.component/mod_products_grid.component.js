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
var ModProductsGridComponent = (function () {
    function ModProductsGridComponent(service_product) {
        var _this = this;
        this.service_product = service_product;
        this.service_product.getListProductPromise().then(function (list) { return _this.list_product_display
            = list.sort(function (item1, item2) { return item2.updated - item1.updated; }).slice(0, 6); });
    }
    ModProductsGridComponent.prototype.ngOnInit = function () { };
    ModProductsGridComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mod_products_grid',
            templateUrl: 'mod_products_grid.component.html'
        }), 
        __metadata('design:paramtypes', [service_product_1.ProductService])
    ], ModProductsGridComponent);
    return ModProductsGridComponent;
}());
exports.ModProductsGridComponent = ModProductsGridComponent;
//# sourceMappingURL=mod_products_grid.component.js.map