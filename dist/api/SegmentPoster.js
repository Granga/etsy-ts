"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SegmentPoster {
    constructor(client) {
        this.client = client;
    }
    /**
     * Find Browse SegmentPosters by Segment slug
     */
    findBrowseSegmentPosters(parameters) {
        return this.client.http("/segments/posters", parameters, "GET");
    }
}
exports.SegmentPoster = SegmentPoster;
