import { request } from "../client/client";
//methods class
export class ImageType {
    /**
     * Lists available image types along with their supported sizes.
     */
    static listImageTypes(parameters, options) {
        return request("/image_types", parameters, "GET", options);
    }
}
