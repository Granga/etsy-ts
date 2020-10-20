"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
const client_1 = require("../client/client");
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
    findAllUserFeedbackAsAuthor,
    findAllUserFeedbackAsBuyer,
    findAllUserFeedbackAsSeller,
    findAllUserFeedbackAsSubject,
    findAllFeedbackFromBuyers,
    findAllFeedbackFromSellers
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVlZGJhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL0ZlZWRiYWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRDtBQWtHckQsU0FBUztBQUNUOztHQUVHO0FBQ0gsU0FBUywyQkFBMkIsQ0FBVSxVQUFrRCxFQUFFLE9BQWtCO0lBQ2hILE9BQU8sZ0JBQU8sQ0FBa0Qsb0NBQW9DLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0SSxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLDBCQUEwQixDQUFVLFVBQWlELEVBQUUsT0FBa0I7SUFDOUcsT0FBTyxnQkFBTyxDQUFpRCxtQ0FBbUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3BJLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsMkJBQTJCLENBQVUsVUFBa0QsRUFBRSxPQUFrQjtJQUNoSCxPQUFPLGdCQUFPLENBQWtELG9DQUFvQyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEksQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyw0QkFBNEIsQ0FBVSxVQUFtRCxFQUFFLE9BQWtCO0lBQ2xILE9BQU8sZ0JBQU8sQ0FBbUQscUNBQXFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN4SSxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQVMseUJBQXlCLENBQVUsVUFBZ0QsRUFBRSxPQUFrQjtJQUM1RyxPQUFPLGdCQUFPLENBQWdELHNDQUFzQyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEksQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFTLDBCQUEwQixDQUFVLFVBQWlELEVBQUUsT0FBa0I7SUFDOUcsT0FBTyxnQkFBTyxDQUFpRCx1Q0FBdUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hJLENBQUM7QUFFWSxRQUFBLFFBQVEsR0FBRztJQUNwQiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLDBCQUEwQjtDQUM3QixDQUFDIn0=