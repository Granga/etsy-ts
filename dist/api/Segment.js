"use strict";
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
