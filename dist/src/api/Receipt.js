"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receipt = void 0;
var Request_1 = require("../client/Request");
//methods class
var Receipt = /** @class */ (function () {
    function Receipt(config, apiKeys) {
        this.config = config;
        this.apiKeys = apiKeys;
    }
    /**
     * Retrieves a Shop_Receipt2 by id.
     */
    Receipt.prototype.getShop_Receipt2 = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/receipts/:receipt_id", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Updates a Shop_Receipt2
     */
    Receipt.prototype.updateReceipt = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/receipts/:receipt_id", method: "PUT" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Retrieves a set of Receipt objects associated to a Shop.
     */
    Receipt.prototype.findAllShopReceipts = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops/:shop_id/receipts", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Submits tracking information and sends a shipping notification email to the buyer. If send_bcc is true, the shipping notification will be sent to the seller as well. Refer to additional documentation.
     */
    Receipt.prototype.submitTracking = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops/:shop_id/receipts/:receipt_id/tracking", method: "POST" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Retrieves a set of Receipt objects associated to a Shop based on the status.
     */
    Receipt.prototype.findAllShopReceiptsByStatus = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops/:shop_id/receipts/:status", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Searches the set of Receipt objects associated to a Shop by a query
     */
    Receipt.prototype.searchAllShopReceipts = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops/:shop_id/receipts/search", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Retrieves a set of Receipt objects associated to a User.
     */
    Receipt.prototype.findAllUserBuyerReceipts = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/users/:user_id/receipts", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    return Receipt;
}());
exports.Receipt = Receipt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjZWlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvUmVjZWlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDZDQUE0QztBQThONUMsZUFBZTtBQUNmO0lBQ0ksaUJBQ3FCLE1BQTBCLEVBQzFCLE9BQWM7UUFEZCxXQUFNLEdBQU4sTUFBTSxDQUFvQjtRQUMxQixZQUFPLEdBQVAsT0FBTyxDQUFPO0lBRW5DLENBQUM7SUFHRDs7T0FFRztJQUNHLGtDQUFnQixHQUF0QixVQUNJLE1BQXdELEVBQ3hELEtBQW9COzs7Z0JBRXBCLHNCQUFPLGlCQUFPLHVCQUNQLElBQUksQ0FBQyxNQUFNLEtBQ2QsR0FBRyxFQUFFLHVCQUF1QixFQUM1QixNQUFNLEVBQUUsS0FBSyxLQUNkLE1BQU0sV0FBTSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUssS0FBSyxFQUFFLEVBQUM7OztLQUN0RDtJQUVEOztPQUVHO0lBQ0csK0JBQWEsR0FBbkIsVUFDSSxNQUFzRCxFQUN0RCxLQUFvQjs7O2dCQUVwQixzQkFBTyxpQkFBTyx1QkFDTixJQUFJLENBQUMsTUFBTSxLQUFFLEdBQUcsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsS0FBSyxLQUM1RCxNQUFNLFdBQ0YsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFLLEtBQUssRUFDeEMsRUFBQzs7O0tBQ0w7SUFFRDs7T0FFRztJQUNHLHFDQUFtQixHQUF6QixVQUNJLE1BQTRELEVBQzVELEtBQW9COzs7Z0JBRXBCLHNCQUFPLGlCQUFPLHVCQUNQLElBQUksQ0FBQyxNQUFNLEtBQ2QsR0FBRyxFQUFFLDBCQUEwQixFQUMvQixNQUFNLEVBQUUsS0FBSyxLQUNkLE1BQU0sV0FBTSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUssS0FBSyxFQUFFLEVBQUM7OztLQUN0RDtJQUVEOztPQUVHO0lBQ0csZ0NBQWMsR0FBcEIsVUFDSSxNQUF1RCxFQUN2RCxLQUFvQjs7O2dCQUVwQixzQkFBTyxpQkFBTyx1QkFDUCxJQUFJLENBQUMsTUFBTSxLQUNkLEdBQUcsRUFBRSwrQ0FBK0MsRUFDcEQsTUFBTSxFQUFFLE1BQU0sS0FDZixNQUFNLFdBQU0sRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFLLEtBQUssRUFBRSxFQUFDOzs7S0FDdEQ7SUFFRDs7T0FFRztJQUNHLDZDQUEyQixHQUFqQyxVQUNJLE1BQW9FLEVBQ3BFLEtBQW9COzs7Z0JBRXBCLHNCQUFPLGlCQUFPLHVCQUNQLElBQUksQ0FBQyxNQUFNLEtBQ2QsR0FBRyxFQUFFLGtDQUFrQyxFQUN2QyxNQUFNLEVBQUUsS0FBSyxLQUNkLE1BQU0sV0FBTSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUssS0FBSyxFQUFFLEVBQUM7OztLQUN0RDtJQUVEOztPQUVHO0lBQ0csdUNBQXFCLEdBQTNCLFVBQ0ksTUFBOEQsRUFDOUQsS0FBb0I7OztnQkFFcEIsc0JBQU8saUJBQU8sdUJBQ1AsSUFBSSxDQUFDLE1BQU0sS0FDZCxHQUFHLEVBQUUsaUNBQWlDLEVBQ3RDLE1BQU0sRUFBRSxLQUFLLEtBQ2QsTUFBTSxXQUFNLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBSyxLQUFLLEVBQUUsRUFBQzs7O0tBQ3REO0lBRUQ7O09BRUc7SUFDRywwQ0FBd0IsR0FBOUIsVUFDSSxNQUFpRSxFQUNqRSxLQUFvQjs7O2dCQUVwQixzQkFBTyxpQkFBTyx1QkFDUCxJQUFJLENBQUMsTUFBTSxLQUNkLEdBQUcsRUFBRSwwQkFBMEIsRUFDL0IsTUFBTSxFQUFFLEtBQUssS0FDZCxNQUFNLFdBQU0sRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFLLEtBQUssRUFBRSxFQUFDOzs7S0FDdEQ7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQXpHRCxJQXlHQztBQXpHWSwwQkFBTyJ9