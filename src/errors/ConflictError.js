import {AppError} from "./AppError.js";

export class ConflictError extends AppError {
    constructor(message = 'Conflict detected') {
        super(message, 409);
    }
}