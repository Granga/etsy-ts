"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Feedback {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsAuthor(parameters) {
        return this.client.http("/users/:user_id/feedback/as-author", parameters, "GET");
    }
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsBuyer(parameters) {
        return this.client.http("/users/:user_id/feedback/as-buyer", parameters, "GET");
    }
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsSeller(parameters) {
        return this.client.http("/users/:user_id/feedback/as-seller", parameters, "GET");
    }
    /**
     * Retrieves a set of Feedback objects associated to a User.
     */
    findAllUserFeedbackAsSubject(parameters) {
        return this.client.http("/users/:user_id/feedback/as-subject", parameters, "GET");
    }
    /**
     * Returns a set of FeedBack objects associated to a User.
     This is essentially the union between the findAllUserFeedbackAsBuyer
     and findAllUserFeedbackAsSubject methods.
     */
    findAllFeedbackFromBuyers(parameters) {
        return this.client.http("/users/:user_id/feedback/from-buyers", parameters, "GET");
    }
    /**
     * Returns a set of FeedBack objects associated to a User.
     This is essentially the union between
     the findAllUserFeedbackAsBuyer and findAllUserFeedbackAsSubject methods.
     */
    findAllFeedbackFromSellers(parameters) {
        return this.client.http("/users/:user_id/feedback/from-sellers", parameters, "GET");
    }
}
exports.Feedback = Feedback;
