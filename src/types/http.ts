import type { request, Dispatcher } from "undici";
import type { Replay } from "./api/index.js";

export enum HttpMethod {
    GET = "GET",
    POST = "POST",
}

export interface RequestFile {
    contentType?: string;
    data: RequestFileData;
    key?: string;
    name?: string;
}

export type RequestHeaders = Record<string, string>;
export type RequestBody = Record<string, unknown>;

export interface RequestData {
    body?: RequestBody;
    headers?: RequestHeaders;
    files?: Replay[];
    query?: URLSearchParams;
}

export type RequestPath = `/${string}`;

/**
 * @internal
 */
export interface InternalRequestOptions extends RequestData {
    method: HttpMethod;
    path: RequestPath;
}

export interface RequestOptions extends InternalRequestOptions {
    service: "ordr" | "dynlink";
}

export type UndiciRequestOptions = Parameters<typeof request>[1];
export type UndiciRequestBody = Dispatcher.DispatchOptions["body"];

/* Node global */
type TypedArray =
    | Uint8Array
    | Uint8ClampedArray
    | Uint16Array
    | Uint32Array
    | Int8Array
    | Int16Array
    | Int32Array
    | BigUint64Array
    | BigInt64Array
    | Float32Array
    | Float64Array;
/* Node global */
type ArrayBufferView = TypedArray | DataView;
/* Node:crypto */
type BinaryLike = string | ArrayBufferView;
/* Node:buffer Blob source */
type RequestFileData = ArrayBuffer | BinaryLike | Blob;
