const {StatusCodes,ReasonPhrases} = require("http-status-codes");
const GenericError = require("./genericError");

export default class BadRequestError extends GenericError {
    constructor(reason = null) {
        const errorMessage = 'There are some invalid or missing properties in the request';
        super(StatusCodes.BAD_REQUEST, reason, errorMessage, "BadRequestError");

    }
}

module.exports = BadRequestError;