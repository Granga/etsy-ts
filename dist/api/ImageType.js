"use strict";
class ImageType {
    constructor(client) {
        this.client = client;
    }
    /**
     * Lists available image types along with their supported sizes.
     */
    listImageTypes(parameters) {
        return this.client.http("/image_types", parameters, "GET");
    }
}
exports.ImageType = ImageType;
