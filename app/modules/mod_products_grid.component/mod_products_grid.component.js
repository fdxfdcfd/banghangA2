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
var ModProductsGridComponent = (function () {
    function ModProductsGridComponent() {
        this.list_product = [
            { product_id: '1', product_name: 'white T-Shirt', product_img: 'images/p1.jpg', price: 300 },
            { product_id: '2', product_name: 'yellow T-Shirt', product_img: 'images/p2.jpg', price: 500 },
            { product_id: '3', product_name: 'black skirt', product_img: 'images/p3.jpg', price: 250 },
            { product_id: '4', product_name: 'red dress', product_img: 'images/p4.jpg', price: 450 },
            { product_id: '5', product_name: 'gray dress', product_img: 'images/p5.jpg', price: 367 },
            { product_id: '7', product_name: 'blue Shirt', product_img: 'images/p6.jpg', price: 352 },
        ];
    }
    ModProductsGridComponent.prototype.ngOnInit = function () { };
    ModProductsGridComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mod_products_grid',
            templateUrl: 'mod_products_grid.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ModProductsGridComponent);
    return ModProductsGridComponent;
}());
exports.ModProductsGridComponent = ModProductsGridComponent;
//# sourceMappingURL=mod_products_grid.component.js.map