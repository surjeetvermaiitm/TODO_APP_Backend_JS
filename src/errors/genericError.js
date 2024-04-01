class GenericError extends Error {
    constructor(statusCode, reason, errorMessage, name) {
        super(errorMessage);
        this.statusCode = statusCode;
        this.reason = reason;
        this.name = name;
        this.errorMessage = errorMessage;
    }
}

module.exports = GenericError;
