import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxxValidateService {
    constructor() { }
}
NgxxValidateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxxValidateService.ctorParameters = () => [];
/** @nocollapse */ NgxxValidateService.ngInjectableDef = defineInjectable({ factory: function NgxxValidateService_Factory() { return new NgxxValidateService(); }, token: NgxxValidateService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxxValidateComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgxxValidateComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ngxx-validate',
                template: `
    <p>
      ngxx-validate works!
    </p>
  `
            }] }
];
/** @nocollapse */
NgxxValidateComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxxValidateModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return { ngModule: NgxxValidateModule, providers: [{ provide: 'config', useValue: config }] };
    }
}
NgxxValidateModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxxValidateComponent],
                imports: [],
                exports: [NgxxValidateComponent],
            },] }
];

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