import NullPointerException from "./NullPointerException.js";
import IllegalArgumentException from "./IllegalArgumentException.js";
/**
 * Static method to enforce a clean code ethics.
 */
export default class Strict {
    constructor() {
        // Intentionally empty.
    }
    /**
     * Ensures that an object reference is not null.
     *
     * @param reference - an object reference
     * @param message - an optional of the exception if the check fails
     * @returns the non-null reference that was validated
     * @throws NullPointerException if reference is null
     */
    static notNull(reference, message) {
        if (reference == null) {
            throw new NullPointerException(message);
        }
        return reference;
    }
    /**
     * Ensures the truth of an expression.
     *
     * @param expression - a boolean expression
     * @param message - an optional message of the exception if check fails
     * @throws IllegalArgumentException if expression is false
     */
    static checkArgument(expression, message) {
        if (!expression) {
            throw new IllegalArgumentException(message);
        }
    }
}
