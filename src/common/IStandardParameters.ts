export interface IStandardParameters {
    /**
     * Your API key. Required for all public entry point calls
     */
    api_key?: string,

    /**
     * Used to specify a custom HTTP method for method overloading.
     */
    method?: string,

    /**
     * Specifies the maximum number of records to return.
     */
    limit?: number,

    /**
     * Skips the first N records before returning results. Combine with limit for pagination.
     */
    offset?: number,

    /**
     * Used to limit the fields in a response object; fields not listed will not be returned. Separate multiple fields with commas.
     */
    fields?: string[],

    /**
     * Used to include associated objects in a response. See Working with Resources section.
     */
    includes?: string[],

    /**
     * Used in conjunction with the JSONP output format to specify a callback function name.
     */
    callback?: string
}