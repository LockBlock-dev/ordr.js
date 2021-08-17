export class BaseError extends Error {
    /**
     * @class BaseError
     * @constructor
     * @private
     * @param {String} type Error type
     * @param {String} message Error message
     */
    private constructor();
    type: string;
    toJSON(): {
        type: string;
        message: string;
    };
}

export class FatalError extends BaseError {
    /**
     * Represents a fatal error from the Client : `"FatalError"`.
     * @extends BaseError
     * @constructor
     * @param {String|Error} error Error object or message
     */
    constructor(error: string | Error);
}

export class APIError extends BaseError {
    /**
     * Represents an error from the API : `"APIError"`.
     * @extends BaseError
     * @constructor
     * @param {String|Error} error Error message
     * @param {Object} response Error response
     * @param {String} status Status type of the request
     * @param {String} method Method used for the request
     * @param {String} url Url of the request to the endpoint
     */
    constructor(error: string | Error, response: any, status: string, method: string, url: string);
    status: string;
    method: string;
    url: string;
    result: string;
    code: number;
    error: string;
}

export class ParseError extends BaseError {
    /**
     * Represents a parsing error : `"ParseError"`.
     * @class ParseError
     * @constructor
     * @param {String} message Error message
     * @param {Object} response Error response
     * @param {String} status Status type of the request
     * @param {String} method Method used for the request
     * @param {String} url Url of the request to the endpoint
     */
    constructor(message: string, response: any, status: string, method: string, url: string);
    status: string;
    method: string;
    url: string;
    response: any;
}
