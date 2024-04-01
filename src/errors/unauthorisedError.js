const {StatusCodes,ReasonPhrases} = require("http-status-codes");
const GenericError = require("./genericError");

export default class UnauthorisedError extends GenericError {
    constructor(message) {
        const errorMessage = (message) ? message : 'Invalid login credentials, please try again with correct credentials !';
        super(StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED, errorMessage, "UnauthorisedError");
    }
}

module.exports = UnauthorisedError;