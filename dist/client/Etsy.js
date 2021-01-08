"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etsy = void 0;
var Entities_1 = require("./Entities");
var Etsy = /** @class */ (function (_super) {
    __extends(Etsy, _super);
    function Etsy(options) {
        var _this = this;
        options.axiosConfig = __assign({ validateStatus: function (status) {
                return status >= 200 && status < 300;
            } }, options.axiosConfig);
        _this = _super.call(this, options.axiosConfig, options.apiKeys) || this;
        return _this;
    }
    return Etsy;
}(Entities_1.Entities));
exports.Etsy = Etsy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXRzeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvRXRzeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSx1Q0FBc0M7QUFRdEM7SUFBMEIsd0JBQVE7SUFDOUIsY0FDSSxPQUdDO1FBSkwsaUJBYUM7UUFQRyxPQUFPLENBQUMsV0FBVyxjQUNmLGNBQWMsRUFBRSxVQUFDLE1BQU07Z0JBQ25CLE9BQU8sTUFBTSxJQUFJLEdBQUcsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ3pDLENBQUMsSUFDRSxPQUFPLENBQUMsV0FBVyxDQUN6QixDQUFDO1FBQ0YsUUFBQSxrQkFBTSxPQUFPLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBQzs7SUFDaEQsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBMEIsbUJBQVEsR0FlakM7QUFmWSxvQkFBSSJ9