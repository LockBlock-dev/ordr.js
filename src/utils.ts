import { STATUS_CODES } from "node:http";
import { basename, resolve } from "node:path";
import { readFile, stat } from "node:fs/promises";
import { ReadStream } from "node:fs";
import { request } from "undici";
import { DefaultClientOptions } from "./constants.js";
import type {
    RequestFile,
    RequestHeaders,
    RequestBody,
    UndiciRequestBody,
    InternalRequestOptions,
    UndiciRequestOptions,
} from "./types/http.js";
import type { Replay } from "./types/api/index.js";

const resolveFiles = async (files: Replay[] = []): Promise<RequestFile[]> => {
    const key = "replayFile";

    const finalFiles: RequestFile[] = await Promise.all(
        files.map(async (file: Replay) => {
            if (Buffer.isBuffer(file))
                return { data: file, name: "replay.osr", key };

            if (
                file instanceof ReadStream &&
                typeof file[Symbol.asyncIterator] === "function"
            ) {
                const buffers = [];

                for await (const data of file)
                    buffers.push(Buffer.from(data as string));

                return {
                    data: Buffer.concat(buffers),
                    name: "replay.osr",
                    key,
                };
            }

            if (typeof file === "string") {
                const path = resolve(file);
                const stats = await stat(path);
                if (stats.isFile())
                    return {
                        data: await readFile(path),
                        name: basename(path),
                        key,
                    };
            }

            throw new TypeError("Invalid replay file provided!");
        })
    );

    return finalFiles;
};

/**
 * Build a body ready to be sent to the API from a body and/or files.
 *
 * @param body - Body to be processed
 * @param files - Files to be processed
 * @returns The processed body and Content-Type header
 */
const processRequestBody = (
    body: RequestBody | undefined = undefined,
    files: RequestFile[] = []
) => {
    let finalBody: UndiciRequestBody;
    let contentHeader: RequestHeaders = {};

    if (files.length > 0) {
        const formData = new FormData();

        for (const [i, file] of files.entries()) {
            const contentType = file.contentType ?? "application/octet-stream";

            formData.append(
                file.key ?? `file[${i}]`,
                new Blob([file.data], { type: contentType }),
                file.name ?? `file[${i}]`
            );
        }

        if (body) {
            for (const [key, value] of Object.entries(body))
                formData.append(key, value);
        }

        finalBody = formData;
    } else if (body) {
        finalBody = JSON.stringify(body);
        contentHeader = { "Content-Type": "application/json" };
    }

    return { finalBody, contentHeader };
};

export const doRequest = async (options: InternalRequestOptions) => {
    const files = await resolveFiles(options.files);

    const { finalBody, contentHeader } = processRequestBody(
        options.body,
        files
    );

    const undiciOptions: UndiciRequestOptions = {
        method: options.method,
        body: finalBody,
        headers: {
            ...options.headers,
            ...contentHeader,
            "User-Agent": DefaultClientOptions.api.userAgent,
        },
    };

    let query = "";

    if (options.query) query = `?${options.query.toString()}`;

    const url = `${DefaultClientOptions.api.url}${options.path}${query}`;

    const response = await request(url, undiciOptions);

    return {
        body: response.body,
        async json() {
            return response.body.json();
        },
        async text() {
            return response.body.text();
        },
        headers: response.headers,
        ok: response.statusCode >= 200 && response.statusCode < 300,
        status: response.statusCode,
        statusText: STATUS_CODES[response.statusCode]!,
        url,
    };
};

/**
 * Serialize a value to a string if possible.
 *
 * @param value - The value to serialize
 * @returns The serialized value or undefined
 */
const serializeSearchParams = (value: unknown): string | undefined => {
    switch (typeof value) {
        case "string": {
            return value;
        }

        case "number":
        case "bigint":
        case "boolean": {
            return value.toString();
        }

        case "object": {
            if (value === null) return undefined;

            if (value instanceof Date) {
                return Number.isNaN(value.getTime())
                    ? undefined
                    : value.toISOString();
            }

            if (
                typeof value.toString === "function" &&
                value.toString !== Object.prototype.toString
            )
                // eslint-disable-next-line @typescript-eslint/no-base-to-string
                return value.toString();

            return undefined;
        }

        default: {
            return undefined;
        }
    }
};

/**
 * Creates and populates an URLSearchParams instance from an object.
 *
 * @param obj - The object to use
 * @returns The populated URLSearchParams instance
 */
export const makeUrlSearchParams = (
    object?: Record<string, any>
): URLSearchParams => {
    const params = new URLSearchParams();

    if (!object) return params;

    for (const [key, value] of Object.entries(object)) {
        const serialized = serializeSearchParams(value);
        if (serialized) params.append(key, serialized);
    }

    return params;
};
