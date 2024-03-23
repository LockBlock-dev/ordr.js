import { ErrorCodes } from "./constants.js";
import type { ApiErrorRequest } from "./types/api/index.js";

/**
 * Represents an error from the API.
 */
export class ApiError extends Error {
    code?: keyof typeof ErrorCodes.api;
    reason?: string;
    request: ApiErrorRequest;

    constructor(
        request: ApiErrorRequest,
        message?: string,
        code?: keyof typeof ErrorCodes.api,
        reason?: string
    ) {
        if (code && ErrorCodes.api[code]) super(ErrorCodes.api[code]);
        else if (message) super(message);
        else super(request.statusText);

        /**
         * API error code
         */
        this.code = code;

        /**
         * API error reason
         */
        this.reason = reason;

        /**
         * HTTP request
         */
        this.request = request;
    }
}
