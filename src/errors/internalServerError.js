const {StatusCodes,ReasonPhrases} = require("http-status-codes");
const GenericError = require("./genericError");

class InternalServerError extends GenericError {
    constructor() {
        const errorMessage = 'Something went wrong, please try again later !';
        super(StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR, errorMessage, "InternalServerError");
    }
}

module.exports = InternalServerError;