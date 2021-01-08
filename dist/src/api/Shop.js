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
exports.Shop = void 0;
var Request_1 = require("../client/Request");
//methods class
var Shop = /** @class */ (function () {
    function Shop(config, apiKeys) {
        this.config = config;
        this.apiKeys = apiKeys;
    }
    /**
     * Finds all Shops.  If there is a keywords parameter, finds shops with shop_name starting with keywords.
     */
    Shop.prototype.findAllShops = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Retrieves a Shop by id.
     */
    Shop.prototype.getShop = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops/:shop_id", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Updates a Shop
     */
    Shop.prototype.updateShop = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops/:shop_id", method: "PUT" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Upload a new shop banner image
     */
    Shop.prototype.uploadShopBanner = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops/:shop_id/appearance/banner", method: "POST" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Deletes a shop banner image
     */
    Shop.prototype.deleteShopBanner = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops/:shop_id/appearance/banner", method: "DELETE" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Retrieves a shop by a listing id.
     */
    Shop.prototype.getListingShop = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops/listing/:listing_id", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Retrieves a set of Shop objects associated to a User.
     */
    Shop.prototype.findAllUserShops = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/users/:user_id/shops", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    return Shop;
}());
exports.Shop = Shop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvU2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDZDQUE0QztBQTZRNUMsZUFBZTtBQUNmO0lBQ0ksY0FDcUIsTUFBMEIsRUFDMUIsT0FBc0I7UUFEdEIsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFDMUIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtJQUUzQyxDQUFDO0lBR0Q7O09BRUc7SUFDRywyQkFBWSxHQUFsQixVQUNJLE1BQXFELEVBQ3JELEtBQW9COzs7Z0JBRXBCLHNCQUFPLGlCQUFPLHVCQUNOLElBQUksQ0FBQyxNQUFNLEtBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxLQUM3QyxNQUFNLFdBQ0YsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFLLEtBQUssRUFDeEMsRUFBQzs7O0tBQ0w7SUFFRDs7T0FFRztJQUNHLHNCQUFPLEdBQWIsVUFDSSxNQUFnRCxFQUNoRCxLQUFvQjs7O2dCQUVwQixzQkFBTyxpQkFBTyx1QkFDTixJQUFJLENBQUMsTUFBTSxLQUFFLEdBQUcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsS0FBSyxLQUN0RCxNQUFNLFdBQ0YsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFLLEtBQUssRUFDeEMsRUFBQzs7O0tBQ0w7SUFFRDs7T0FFRztJQUNHLHlCQUFVLEdBQWhCLFVBQ0ksTUFBbUQsRUFDbkQsS0FBb0I7OztnQkFFcEIsc0JBQU8saUJBQU8sdUJBQ04sSUFBSSxDQUFDLE1BQU0sS0FBRSxHQUFHLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLEtBQUssS0FDdEQsTUFBTSxXQUNGLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBSyxLQUFLLEVBQ3hDLEVBQUM7OztLQUNMO0lBRUQ7O09BRUc7SUFDRywrQkFBZ0IsR0FBdEIsVUFDSSxNQUF5RCxFQUN6RCxLQUFvQjs7O2dCQUVwQixzQkFBTyxpQkFBTyx1QkFDUCxJQUFJLENBQUMsTUFBTSxLQUNkLEdBQUcsRUFBRSxtQ0FBbUMsRUFDeEMsTUFBTSxFQUFFLE1BQU0sS0FDZixNQUFNLFdBQU0sRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFLLEtBQUssRUFBRSxFQUFDOzs7S0FDdEQ7SUFFRDs7T0FFRztJQUNHLCtCQUFnQixHQUF0QixVQUNJLE1BQXlELEVBQ3pELEtBQW9COzs7Z0JBRXBCLHNCQUFPLGlCQUFPLHVCQUNQLElBQUksQ0FBQyxNQUFNLEtBQ2QsR0FBRyxFQUFFLG1DQUFtQyxFQUN4QyxNQUFNLEVBQUUsUUFBUSxLQUNqQixNQUFNLFdBQU0sRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFLLEtBQUssRUFBRSxFQUFDOzs7S0FDdEQ7SUFFRDs7T0FFRztJQUNHLDZCQUFjLEdBQXBCLFVBQ0ksTUFBdUQsRUFDdkQsS0FBb0I7OztnQkFFcEIsc0JBQU8saUJBQU8sdUJBQ1AsSUFBSSxDQUFDLE1BQU0sS0FDZCxHQUFHLEVBQUUsNEJBQTRCLEVBQ2pDLE1BQU0sRUFBRSxLQUFLLEtBQ2QsTUFBTSxXQUFNLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBSyxLQUFLLEVBQUUsRUFBQzs7O0tBQ3REO0lBRUQ7O09BRUc7SUFDRywrQkFBZ0IsR0FBdEIsVUFDSSxNQUF5RCxFQUN6RCxLQUFvQjs7O2dCQUVwQixzQkFBTyxpQkFBTyx1QkFDUCxJQUFJLENBQUMsTUFBTSxLQUNkLEdBQUcsRUFBRSx1QkFBdUIsRUFDNUIsTUFBTSxFQUFFLEtBQUssS0FDZCxNQUFNLFdBQU0sRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFLLEtBQUssRUFBRSxFQUFDOzs7S0FDdEQ7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQXpHRCxJQXlHQztBQXpHWSxvQkFBSSJ9