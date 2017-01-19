"use strict";
const HttpRequest_1 = require("../common/HttpRequest");
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
function findAllUserFeedbackAsAuthor(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/feedback/as-author', 'GET');
}
exports.findAllUserFeedbackAsAuthor = findAllUserFeedbackAsAuthor;
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
function findAllUserFeedbackAsBuyer(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/feedback/as-buyer', 'GET');
}
exports.findAllUserFeedbackAsBuyer = findAllUserFeedbackAsBuyer;
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
function findAllUserFeedbackAsSeller(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/feedback/as-seller', 'GET');
}
exports.findAllUserFeedbackAsSeller = findAllUserFeedbackAsSeller;
/**
 * Retrieves a set of Feedback objects associated to a User.
 */
function findAllUserFeedbackAsSubject(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/feedback/as-subject', 'GET');
}
exports.findAllUserFeedbackAsSubject = findAllUserFeedbackAsSubject;
/**
 * Returns a set of FeedBack objects associated to a User.
 This is essentially the union between the findAllUserFeedbackAsBuyer
 and findAllUserFeedbackAsSubject methods.
 */
function findAllFeedbackFromBuyers(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/feedback/from-buyers', 'GET');
}
exports.findAllFeedbackFromBuyers = findAllFeedbackFromBuyers;
/**
 * Returns a set of FeedBack objects associated to a User.
 This is essentially the union between
 the findAllUserFeedbackAsBuyer and findAllUserFeedbackAsSubject methods.
 */
function findAllFeedbackFromSellers(parameters) {
    return HttpRequest_1.request(parameters, '/users/:user_id/feedback/from-sellers', 'GET');
}
exports.findAllFeedbackFromSellers = findAllFeedbackFromSellers;
