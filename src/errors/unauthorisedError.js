import { ReasonPhrases, StatusCodes } from "http-status-codes";
import GenericError from "./genericError";

export default class UnauthorisedError extends GenericError {
    constructor(message) {
        const errorMessage = (message) ? message : 'Invalid login credentials, please try again with correct credentials !';
        super(StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED, errorMessage, "UnauthorisedError");
    }
}