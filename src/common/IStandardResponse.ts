export interface IStandardResponse<TResult, TParameters> {
    count: number,
    results: TResult[],
    params: TParameters,
    type: string
}