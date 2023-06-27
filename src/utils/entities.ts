import { QueryFunction, QueryFunctionContext } from '@tanstack/react-query';

export class ApiError extends Error {
    code: number;

    constructor(code: number, message: string) {
        super(message);

        this.code = code;
    }
}

const API = 'https://jsonplaceholder.typicode.com';

export const entityFetcher = function <T = unknown>(routeKey: ((context: QueryFunctionContext) => string) | string) {
    const fetcher: QueryFunction<T> = async function (context) {
        const route = typeof routeKey === 'function' ? routeKey(context) : routeKey;

        const response = await fetch(API + route);

        if (!response.ok) {
            throw new ApiError(response.status, response.statusText);
        }

        return (await response.json()) as T;
    };

    return fetcher;
};
