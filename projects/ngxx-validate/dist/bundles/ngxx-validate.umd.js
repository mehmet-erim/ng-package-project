(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngxx-validate', ['exports', '@angular/core'], factory) :
    (factory((global['ngxx-validate'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxxValidateService = /** @class */ (function () {
        function NgxxValidateService() {
        }
        NgxxValidateService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxxValidateService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgxxValidateService.ngInjectableDef = i0.defineInjectable({ factory: function NgxxValidateService_Factory() { return new NgxxValidateService(); }, token: NgxxValidateService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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

    exports.NgxxValidateService = NgxxValidateService;
    exports.NgxxValidateComponent = NgxxValidateComponent;
    exports.NgxxValidateModule = NgxxValidateModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngxx-validate.umd.js.map