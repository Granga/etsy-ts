export interface IStandardResponse<TParameters, TResult> {
    count: number;
    results: TResult[];
    params: TParameters;
    type: string;
}
