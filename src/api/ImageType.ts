import {IStandardParameters} from "../client/IStandardParameters";
import {EtsyApiClient} from "../client/EtsyApiClient";
import {IStandardResponse} from "../client/IStandardResponse";

export interface IImageType {
    code: string,
    desc: string,
    sizes: string[]
}


export interface IListImageTypesParameters extends IStandardParameters {

}

export class ImageType {
    constructor(private client: EtsyApiClient) {

    }


    /**
     * Lists available image types along with their supported sizes.
     */
    listImageTypes<TResult>(parameters: IListImageTypesParameters): Promise<IStandardResponse<IListImageTypesParameters, TResult>> {
        return this.client.http<IListImageTypesParameters, TResult>("/image_types", parameters, "GET");
    }
}
