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
exports.Listing = void 0;
var Request_1 = require("../client/Request");
//methods class
var Listing = /** @class */ (function () {
    function Listing(config, apiKeys) {
        this.config = config;
        this.apiKeys = apiKeys;
    }
    /**
     * Creates a new Listing.
     */
    Listing.prototype.createListing = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/listings", method: "POST" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Finds all FeaturedTreasury listings.
     */
    Listing.prototype.findAllFeaturedListings = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/featured_treasuries/listings", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Retrieves a Listing by id.
     */
    Listing.prototype.getListing = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/listings/:listing_id", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Updates a Listing
     */
    Listing.prototype.updateListing = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/listings/:listing_id", method: "PUT" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Deletes a Listing
     */
    Listing.prototype.deleteListing = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/listings/:listing_id", method: "DELETE" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Finds all active Listings. (Note: the sort_on and sort_order options only work when combined with one of the search options: keywords, color, tags, location, etc.)
     */
    Listing.prototype.findAllListingActive = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/listings/active", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Collects the list of interesting listings
     */
    Listing.prototype.getInterestingListings = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/listings/interesting", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Collects the list of listings used to generate the trending listing page
     */
    Listing.prototype.getTrendingListings = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/listings/trending", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Finds all listings for a certain FeaturedTreasury.
     */
    Listing.prototype.findAllListingsForFeaturedTreasuryId = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/featured_treasuries/:featured_treasury_id/listings", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Finds all active listings for a certain FeaturedTreasury.
     */
    Listing.prototype.findAllActiveListingsForFeaturedTreasuryId = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/featured_treasuries/:featured_treasury_id/listings/active", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Finds FeaturedTreasury listings that are currently displayed on a regional homepage.
     */
    Listing.prototype.findAllCurrentFeaturedListings = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/featured_treasuries/listings/homepage_current", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Finds all listings in a receipt
     */
    Listing.prototype.findAllReceiptListings = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/receipts/:receipt_id/listings", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Finds all active Listings associated with a Shop.(NOTE: If calling on behalf of a shop owner in the context of listing management, be sure to include the parameter include_private = true.  This will return private listings that are not publicly visible in the shop, but which can be managed.  This is an experimental feature and may change.)
     */
    Listing.prototype.findAllShopListingsActive = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops/:shop_id/listings/active", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Finds all of a Shop's draft listings
     */
    Listing.prototype.findAllShopListingsDraft = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops/:shop_id/listings/draft", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Retrieves Listings associated to a Shop that are expired
     */
    Listing.prototype.findAllShopListingsExpired = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops/:shop_id/listings/expired", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Retrieves a Listing associated to a Shop that is inactive
     */
    Listing.prototype.getShopListingExpired = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops/:shop_id/listings/expired/:listing_id", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Retrieves Listings associated to a Shop that are featured
     */
    Listing.prototype.findAllShopListingsFeatured = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops/:shop_id/listings/featured", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Retrieves Listings associated to a Shop that are inactive
     */
    Listing.prototype.findAllShopListingsInactive = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops/:shop_id/listings/inactive", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Retrieves a Listing associated to a Shop that is inactive
     */
    Listing.prototype.getShopListingInactive = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops/:shop_id/listings/inactive/:listing_id", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Finds all listings within a shop section
     */
    Listing.prototype.findAllShopSectionListings = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops/:shop_id/sections/:shop_section_id/listings", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Finds all listings within a shop section
     */
    Listing.prototype.findAllShopSectionListingsActive = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shops/:shop_id/sections/:shop_section_id/listings/active", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Finds all listings in a given Cart
     */
    Listing.prototype.findAllCartListings = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/users/:user_id/carts/:cart_id/listings", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    return Listing;
}());
exports.Listing = Listing;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvTGlzdGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDZDQUE0QztBQWdhNUMsZUFBZTtBQUNmO0lBQ0ksaUJBQ3FCLE1BQTBCLEVBQzFCLE9BQXNCO1FBRHRCLFdBQU0sR0FBTixNQUFNLENBQW9CO1FBQzFCLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFFM0MsQ0FBQztJQUdEOztPQUVHO0lBQ0csK0JBQWEsR0FBbkIsVUFDSSxNQUFzRCxFQUN0RCxLQUFvQjs7O2dCQUVwQixzQkFBTyxpQkFBTyx1QkFDTixJQUFJLENBQUMsTUFBTSxLQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sS0FDakQsTUFBTSxXQUNGLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBSyxLQUFLLEVBQ3hDLEVBQUM7OztLQUNMO0lBRUQ7O09BRUc7SUFDRyx5Q0FBdUIsR0FBN0IsVUFDSSxNQUFnRSxFQUNoRSxLQUFvQjs7O2dCQUVwQixzQkFBTyxpQkFBTyx1QkFDUCxJQUFJLENBQUMsTUFBTSxLQUNkLEdBQUcsRUFBRSwrQkFBK0IsRUFDcEMsTUFBTSxFQUFFLEtBQUssS0FDZCxNQUFNLFdBQU0sRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFLLEtBQUssRUFBRSxFQUFDOzs7S0FDdEQ7SUFFRDs7T0FFRztJQUNHLDRCQUFVLEdBQWhCLFVBQ0ksTUFBbUQsRUFDbkQsS0FBb0I7OztnQkFFcEIsc0JBQU8saUJBQU8sdUJBQ04sSUFBSSxDQUFDLE1BQU0sS0FBRSxHQUFHLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLEtBQUssS0FDNUQsTUFBTSxXQUNGLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMs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