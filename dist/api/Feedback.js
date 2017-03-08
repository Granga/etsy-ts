"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var httpClient_1 = require("../client/httpClient");
//methods
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
function findAllUserFeedbackAsAuthor(parameters) {
    return httpClient_1.request("/users/:user_id/feedback/as-author", parameters, "GET");
}
exports.findAllUserFeedbackAsAuthor = findAllUserFeedbackAsAuthor;
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
function findAllUserFeedbackAsBuyer(parameters) {
    return httpClient_1.request("/users/:user_id/feedback/as-buyer", parameters, "GET");
}
exports.findAllUserFeedbackAsBuyer = findAllUserFeedbackAsBuyer;
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
function findAllUserFeedbackAsSeller(parameters) {
    return httpClient_1.request("/users/:user_id/feedback/as-seller", parameters, "GET");
}
exports.findAllUserFeedbackAsSeller = findAllUserFeedbackAsSeller;
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
function findAllUserFeedbackAsSubject(parameters) {
    return httpClient_1.request("/users/:user_id/feedback/as-subject", parameters, "GET");
}
exports.findAllUserFeedbackAsSubject = findAllUserFeedbackAsSubject;
/**
 * Returns a set of FeedBack objects associated to a User.
 This is essentially the union between the findAllUserFeedbackAsBuyer
 and findAllUserFeedbackAsSubject methods.
 */
function findAllFeedbackFromBuyers(parameters) {
    return httpClient_1.request("/users/:user_id/feedback/from-buyers", parameters, "GET");
}
exports.findAllFeedbackFromBuyers = findAllFeedbackFromBuyers;
/**
 * Returns a set of FeedBack objects associated to a User.
 This is essentially the union between
 the findAllUserFeedbackAsBuyer and findAllUserFeedbackAsSubject methods.
 */
function findAllFeedbackFromSellers(parameters) {
    return httpClient_1.request("/users/:user_id/feedback/from-sellers", parameters, "GET");
}
exports.findAllFeedbackFromSellers = findAllFeedbackFromSellers;
exports.Feedback = {
    findAllUserFeedbackAsAuthor: findAllUserFeedbackAsAuthor,
    findAllUserFeedbackAsBuyer: findAllUserFeedbackAsBuyer,
    findAllUserFeedbackAsSeller: findAllUserFeedbackAsSeller,
    findAllUserFeedbackAsSubject: findAllUserFeedbackAsSubject,
    findAllFeedbackFromBuyers: findAllFeedbackFromBuyers,
    findAllFeedbackFromSellers: findAllFeedbackFromSellers
};
