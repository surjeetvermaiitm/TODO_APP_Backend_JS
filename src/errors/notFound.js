const {StatusCodes,ReasonPhrases} = require("http-status-codes");
const GenericError = require("./genericError");

export default class NotFoundError extends GenericError {
    constructor(resourceName, property, propertyValue) {
        const errorMessage = `The resource: ${resourceName} with property ${property} : ${propertyValue} not found`;
        super(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND, errorMessage, "NotFoundError");

    }
}

module.exports = NotFoundError;