import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IListingFile {
    listing_file_id: number;
    listing_id: number;
    rank: number;
    filename: string;
    filesize: string;
    size_bytes: number;
    filetype: string;
    create_date: number;
}
export interface IFindAllListingFilesParameters extends IStandardParameters {
    listing_id: number;
}
export interface IUploadListingFileParameters extends IStandardParameters {
    listing_id: number;
    listing_file_id?: number;
    file?: any;
    name?: string;
    rank?: number;
}
export interface IFindListingFileParameters extends IStandardParameters {
    listing_id: number;
    listing_file_id: number;
}
export interface IDeleteListingFileParameters extends IStandardParameters {
    listing_id: number;
    listing_file_id: number;
}
export declare const ListingFile: {
    findAllListingFiles: <TResult>(parameters: IFindAllListingFilesParameters, options?: IOptions) => Promise<IStandardResponse<IFindAllListingFilesParameters, TResult>>;
    uploadListingFile: <TResult>(parameters: IUploadListingFileParameters, options?: IOptions) => Promise<IStandardResponse<IUploadListingFileParameters, TResult>>;
    findListingFile: <TResult>(parameters: IFindListingFileParameters, options?: IOptions) => Promise<IStandardResponse<IFindListingFileParameters, TResult>>;
    deleteListingFile: <TResult>(parameters: IDeleteListingFileParameters, options?: IOptions) => Promise<IStandardResponse<IDeleteListingFileParameters, TResult>>;
};
