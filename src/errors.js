const { apiCodes } = require("./constants");

class BaseError extends Error {
    /**
     * Represents the base error for o!rdr.
     * @private
     * @param {string} type The error type.
     * @param {string} message The error message.
     */
    constructor(type, message) {
        super(message);

        /**
         * The error type.
         * @type {string}
         */
        this.type = type;
    }

    toJSON() {
        return { type: this.type, message: this.message };
    }
}

class FatalError extends BaseError {
    /**
     * Represents a fatal error from the client.
     * @extends BaseError
     * @param {string | Error} error The error object or message.
     */
    constructor(error) {
        const errObject = typeof error === "string" ? null : error,
            message = errObject ? errObject.message : error;

        super("FatalError", message);

        if (errObject) this.stack = errObject.stack;
    }
}

class APIError extends BaseError {
    /**
     * Represents an error from the API.
     * @extends BaseError
     * @param {string | Error} error The error message.
     * @param {Object} response The error response.
     * @param {string} status The status type of the request.
     * @param {string} method The method used for the request.
     * @param {string} url The URL of the request to the endpoint.
     */
    constructor(error, response, status, method, url) {
        const errObject = typeof error === "string" ? null : error,
            message = errObject ? errObject.message : error;

        super("APIError", message);

        /**
         * The status type of the request.
         * @type {string}
         */
        this.status = status;

        /**
         * The method used for the request.
         * @type {string}
         */
        this.method = method;

        /**
         * The URL of the request to the endpoint.
         * @type {string}
         */
        this.url = url;

        if (response.data) {
            response.data.message ? (this.result = response.data.message) : null;
            response.data.reason ? (this.result += `. Reason: ${response.data.reason}`) : null;
            response.data.errorCode ? ((this.code = response.data.errorCode), (this.error = apiCodes[response.data.errorCode])) : null;
        }
    }
}

class ParseError extends BaseError {
    /**
     * Represents a parsing error.
     * @extends BaseError
     * @param {string} message The error message.
     * @param {string} status The status type of the request.
     * @param {string} method The method used for the request.
     * @param {string} url The URL of the request to the endpoint.
     */
    constructor(message, status, method, url) {
        super("ParseError", message);

        /**
         * The status type of the request.
         * @type {string}
         */
        this.status = status;

        /**
         * The method used for the request.
         * @type {string}
         */
        this.method = method;

        /**
         * The URL of the request to the endpoint.
         * @type {string}
         */
        this.url = url;
    }
}

module.exports = { FatalError, APIError, ParseError };
