"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Style {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieve all suggested styles.
     */
    findSuggestedStyles(parameters) {
        return this.client.http("/taxonomy/styles", parameters, "GET");
    }
}
exports.Style = Style;
