"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
var client_1 = require("../client/client");
//methods class
var Feedback = /** @class */ (function () {
    function Feedback() {
    }
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    Feedback.findAllUserFeedbackAsAuthor = function (parameters, options) {
        return client_1.request("/users/:user_id/feedback/as-author", parameters, "GET", options);
    };
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    Feedback.findAllUserFeedbackAsBuyer = function (parameters, options) {
        return client_1.request("/users/:user_id/feedback/as-buyer", parameters, "GET", options);
    };
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    Feedback.findAllUserFeedbackAsSeller = function (parameters, options) {
        return client_1.request("/users/:user_id/feedback/as-seller", parameters, "GET", options);
    };
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    Feedback.findAllUserFeedbackAsSubject = function (parameters, options) {
        return client_1.request("/users/:user_id/feedback/as-subject", parameters, "GET", options);
    };
    /**
     * Returns a set of FeedBack objects associated to a User.
     This is essentially the union between the findAllUserFeedbackAsBuyer
     and findAllUserFeedbackAsSubject methods.
     */
    Feedback.findAllFeedbackFromBuyers = function (parameters, options) {
        return client_1.request("/users/:user_id/feedback/from-buyers", parameters, "GET", options);
    };
    /**
     * Returns a set of FeedBack objects associated to a User.
     This is essentially the union between
     the findAllUserFeedbackAsBuyer and findAllUserFeedbackAsSubject methods.
     */
    Feedback.findAllFeedbackFromSellers = function (parameters, options) {
        return client_1.request("/users/:user_id/feedback/from-sellers", parameters, "GET", options);
    };
    return Feedback;
}());
exports.Feedback = Feedback;
