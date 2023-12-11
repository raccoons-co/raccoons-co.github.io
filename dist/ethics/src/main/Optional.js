import Strict from "./Strict.js";
import NoSuchElementException from "./NoSuchElementException.js";
/**
 * A container object which may or may not contain a non-null value.
 *
 * @typeParam T - the type of the value
 * @public
 */
export default class Optional {
    constructor(value) {
        this.value = value;
    }
    /**
     * Returns status of value presence.
     */
    isPresent() {
        return true;
    }
    /**
     * Returns status of value absence.
     */
    isEmpty() {
        return false;
    }
    /**
     * Returns the value if present or empty optional throws NoSuchElementException.
     */
    get() {
        return this.value;
    }
    /**
     * Returns the value if present or empty optional throws NoSuchElementException.
     */
    orElseThrow() {
        return this.get();
    }
    /**
     * Returns the value if present or else returns other value.
     *
     * @param otherValue - the value to be returned if value is absent
     */
    orElse(otherValue) {
        var _a;
        return (_a = this.value) !== null && _a !== void 0 ? _a : otherValue;
    }
    /**
     * Performs the given action with the value, otherwise does nothing.
     *
     * @param action - the action to be performed
     * @throws NullPointerException if given action is null
     */
    ifPresent(action) {
        Strict.notNull(action);
        action(this.value);
    }
    /**
     * Performs the given action with the value, otherwise performs the given empty-based action.
     *
     * @param action - the action to be performed if value is present
     * @param emptyAction - the empty-based action to be performed if value is absent
     * @throws NullPointerException if value is present and the given action is null, or value
     * is absent and the given empty-based action is null
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ifPresentOrElse(action, emptyAction) {
        this.ifPresent(action);
    }
    /**
     * Returns an optional of given non-null value.
     *
     * @typeParam T - the type of the value
     * @param value - the value to describe
     * @throws NullPointerException if value is null
     */
    static of(value) {
        Strict.notNull(value);
        return new Optional(value);
    }
    /**
     * Returns an optional of given non-null value, otherwise an empty optional.
     */
    static ofNullable(value) {
        return value
            ? this.of(value)
            : this.empty();
    }
    /**
     * Returns an empty optional with no present value to get.
     */
    static empty() {
        return new class EmptyOptional extends Optional {
            constructor() {
                super(null);
            }
            /** @override */
            isPresent() {
                return false;
            }
            /** @override */
            isEmpty() {
                return true;
            }
            /** @override */
            get() {
                throw new NoSuchElementException("No value present");
            }
            /** @override */
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            ifPresent(performAction) {
                // Intentionally empty
            }
            /** @override */
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            ifPresentOrElse(action, emptyAction) {
                Strict.notNull(emptyAction);
                emptyAction();
            }
        };
    }
}
