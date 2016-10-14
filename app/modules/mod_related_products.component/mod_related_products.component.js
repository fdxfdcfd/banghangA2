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
var ModRelatedProductsComponent = (function () {
    function ModRelatedProductsComponent() {
        this.list_product = [
            { product_id: '1', product_name: 'white T-Shirt', product_img: 'images/p1.jpg', price: 300,
                brief: 'Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini' },
            { product_id: '2', product_name: 'yellow T-Shirt', product_img: 'images/p2.jpg', price: 500,
                brief: 'A classic fifties shape is updated with the Floral Fit-and-Flare Dress from Wallis' },
            { product_id: '3', product_name: 'black skirt', product_img: 'images/p3.jpg', price: 250,
                brief: 'The Keep On Swinging Wrap Dress from Lioness is crafted from a silky-smooth and lightweight fabric' },
        ];
    }
    ModRelatedProductsComponent.prototype.ngOnInit = function () { };
    ModRelatedProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mod_related_products',
            templateUrl: 'mod_related_products.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ModRelatedProductsComponent);
    return ModRelatedProductsComponent;
}());
exports.ModRelatedProductsComponent = ModRelatedProductsComponent;
//# sourceMappingURL=mod_related_products.component.js.map