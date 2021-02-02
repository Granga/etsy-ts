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
exports.ListingImage = void 0;
var Request_1 = require("../client/Request");
//methods class
var ListingImage = /** @class */ (function () {
    function ListingImage(config, apiKeys) {
        this.config = config;
        this.apiKeys = apiKeys;
    }
    /**
     * Retrieves a set of ListingImage objects associated to a Listing.
     */
    ListingImage.prototype.findAllListingImages = function (params, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign(__assign({}, this.config), options === null || options === void 0 ? void 0 : options.axiosConfig), { url: "/listings/:listing_id/images", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, options))];
            });
        });
    };
    /**
     * Upload a new listing image, or re-associate a previously deleted one. You may associate an image
     to any listing within the same shop that the image's original listing belongs to.
     You MUST pass either a listing_image_id OR an image to this method.
     Passing a listing_image_id serves to re-associate an image that was previously deleted.
     If you wish to re-associate an image, we strongly recommend using the listing_image_id
     argument as opposed to re-uploading a new image each time, to save bandwidth for you as well as us.
     Pass overwrite=1 to replace the existing image at a given rank.
     When uploading a new listing image with a watermark, pass is_watermarked=1; existing listing images
     will not be affected by this parameter.
     */
    ListingImage.prototype.uploadListingImage = function (params, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign(__assign({}, this.config), options === null || options === void 0 ? void 0 : options.axiosConfig), { url: "/listings/:listing_id/images", method: "POST" }), params, __assign({ apiKeys: this.apiKeys }, options))];
            });
        });
    };
    /**
     * Retrieves a Image_Listing by id.
     */
    ListingImage.prototype.getImage_Listing = function (params, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign(__assign({}, this.config), options === null || options === void 0 ? void 0 : options.axiosConfig), { url: "/listings/:listing_id/images/:listing_image_id", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, options))];
            });
        });
    };
    /**
     * Deletes a listing image. A copy of the file remains on our servers,
     and so a deleted image may be re-associated with the listing without
     re-uploading the original image; see uploadListingImage
     */
    ListingImage.prototype.deleteListingImage = function (params, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign(__assign({}, this.config), options === null || options === void 0 ? void 0 : options.axiosConfig), { url: "/listings/:listing_id/images/:listing_image_id", method: "DELETE" }), params, __assign({ apiKeys: this.apiKeys }, options))];
            });
        });
    };
    return ListingImage;
}());
exports.ListingImage = ListingImage;
