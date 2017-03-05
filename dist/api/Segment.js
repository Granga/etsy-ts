"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Segment {
    constructor(client) {
        this.client = client;
    }
    /**
     * Find all Browse Segments
     */
    findBrowseSegments(parameters) {
        return this.client.http("/segments", parameters, "GET");
    }
}
exports.Segment = Segment;
