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
exports.Region = void 0;
var Request_1 = require("../client/Request");
//methods class
var Region = /** @class */ (function () {
    function Region(config, apiKeys) {
        this.config = config;
        this.apiKeys = apiKeys;
    }
    /**
     * Finds all Region.
     */
    Region.prototype.findAllRegion = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/regions", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Retrieves a Region by id.
     */
    Region.prototype.getRegion = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/regions/:region_id", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     *
     */
    Region.prototype.findEligibleRegions = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/regions/eligible", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    return Region;
}());
exports.Region = Region;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwaS9SZWdpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSw2Q0FBNEM7QUFrQzVDLGVBQWU7QUFDZjtJQUNJLGdCQUNxQixNQUEwQixFQUMxQixPQUFjO1FBRGQsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFDMUIsWUFBTyxHQUFQLE9BQU8sQ0FBTztJQUVuQyxDQUFDO0lBR0Q7O09BRUc7SUFDRyw4QkFBYSxHQUFuQixVQUNJLE1BQXNELEVBQ3RELEtBQW9COzs7Z0JBRXBCLHNCQUFPLGlCQUFPLHVCQUNOLElBQUksQ0FBQyxNQUFNLEtBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxLQUMvQyxNQUFNLFdBQ0YsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFLLEtBQUssRUFDeEMsRUFBQzs7O0tBQ0w7SUFFRDs7T0FFRztJQUNHLDBCQUFTLEdBQWYsVUFDSSxNQUFrRCxFQUNsRCxLQUFvQjs7O2dCQUVwQixzQkFBTyxpQkFBTyx1QkFDTixJQUFJLENBQUMsTUFBTSxLQUFFLEdBQUcsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsS0FBSyxLQUMxRCxNQUFNLFdBQ0YsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFLLEtBQUssRUFDeEMsRUFBQzs7O0tBQ0w7SUFFRDs7T0FFRztJQUNHLG9DQUFtQixHQUF6QixVQUNJLE1BQTRELEVBQzVELEtBQW9COzs7Z0JBRXBCLHNCQUFPLGlCQUFPLHVCQUNQLElBQUksQ0FBQyxNQUFNLEtBQ2QsR0FBRyxFQUFFLG1CQUFtQixFQUN4QixNQUFNLEVBQUUsS0FBSyxLQUNkLE1BQU0sV0FBTSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUssS0FBSyxFQUFFLEVBQUM7OztLQUN0RDtJQUNMLGFBQUM7QUFBRCxDQUFDLEFBakRELElBaURDO0FBakRZLHdCQUFNIn0=