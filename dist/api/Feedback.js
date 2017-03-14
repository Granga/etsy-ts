"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client/client");
//methods
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
function findAllUserFeedbackAsAuthor(parameters, options) {
    return client_1.request("/users/:user_id/feedback/as-author", parameters, "GET", options);
}
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
function findAllUserFeedbackAsBuyer(parameters, options) {
    return client_1.request("/users/:user_id/feedback/as-buyer", parameters, "GET", options);
}
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
function findAllUserFeedbackAsSeller(parameters, options) {
    return client_1.request("/users/:user_id/feedback/as-seller", parameters, "GET", options);
}
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
function findAllUserFeedbackAsSubject(parameters, options) {
    return client_1.request("/users/:user_id/feedback/as-subject", parameters, "GET", options);
}
/**
 * Returns a set of FeedBack objects associated to a User.
 This is essentially the union between the findAllUserFeedbackAsBuyer
 and findAllUserFeedbackAsSubject methods.
 */
function findAllFeedbackFromBuyers(parameters, options) {
    return client_1.request("/users/:user_id/feedback/from-buyers", parameters, "GET", options);
}
/**
 * Returns a set of FeedBack objects associated to a User.
 This is essentially the union between
 the findAllUserFeedbackAsBuyer and findAllUserFeedbackAsSubject methods.
 */
function findAllFeedbackFromSellers(parameters, options) {
    return client_1.request("/users/:user_id/feedback/from-sellers", parameters, "GET", options);
}
exports.Feedback = {
    findAllUserFeedbackAsAuthor: findAllUserFeedbackAsAuthor,
    findAllUserFeedbackAsBuyer: findAllUserFeedbackAsBuyer,
    findAllUserFeedbackAsSeller: findAllUserFeedbackAsSeller,
    findAllUserFeedbackAsSubject: findAllUserFeedbackAsSubject,
    findAllFeedbackFromBuyers: findAllFeedbackFromBuyers,
    findAllFeedbackFromSellers: findAllFeedbackFromSellers
};
