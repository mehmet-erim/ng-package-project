import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxxValidateService = /** @class */ (function () {
    function NgxxValidateService() {
    }
    NgxxValidateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxxValidateService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxxValidateService.ngInjectableDef = defineInjectable({ factory: function NgxxValidateService_Factory() { return new NgxxValidateService(); }, token: NgxxValidateService, providedIn: "root" });
    return NgxxValidateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxxValidateComponent = /** @class */ (function () {
    function NgxxValidateComponent() {
    }
    /**
     * @return {?}
     */
    NgxxValidateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgxxValidateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ngxx-validate',
                    template: "\n    <p>\n      ngxx-validate works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    NgxxValidateComponent.ctorParameters = function () { return []; };
    return NgxxValidateComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxxValidateModule = /** @class */ (function () {
    function NgxxValidateModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NgxxValidateModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return { ngModule: NgxxValidateModule, providers: [{ provide: 'config', useValue: config }] };
    };
    NgxxValidateModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgxxValidateComponent],
                    imports: [],
                    exports: [NgxxValidateComponent],
                },] }
    ];
    return NgxxValidateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxxValidateService, NgxxValidateComponent, NgxxValidateModule };

//# sourceMappingURL=ngxx-validate.js.map