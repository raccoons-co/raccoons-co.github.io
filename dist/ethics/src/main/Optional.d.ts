/**
 * A container object which may or may not contain a non-null value.
 *
 * @typeParam T - the type of the value
 * @public
 */
export default class Optional<T> {
    private readonly value;
    private constructor();
    /**
     * Returns status of value presence.
     */
    isPresent(): boolean;
    /**
     * Returns status of value absence.
     */
    isEmpty(): boolean;
    /**
     * Returns the value if present or empty optional throws NoSuchElementException.
     */
    get(): T;
    /**
     * Returns the value if present or empty optional throws NoSuchElementException.
     */
    orElseThrow(): T;
    /**
     * Returns the value if present or else returns other value.
     *
     * @param otherValue - the value to be returned if value is absent
     */
    orElse(otherValue: T): T;
    /**
     * Performs the given action with the value, otherwise does nothing.
     *
     * @param action - the action to be performed
     * @throws NullPointerException if given action is null
     */
    ifPresent(action: (value: T) => void): void;
    /**
     * Performs the given action with the value, otherwise performs the given empty-based action.
     *
     * @param action - the action to be performed if value is present
     * @param emptyAction - the empty-based action to be performed if value is absent
     * @throws NullPointerException if value is present and the given action is null, or value
     * is absent and the given empty-based action is null
     */
    ifPresentOrElse(action: (value: T) => void, emptyAction: () => void): void;
    /**
     * Returns an optional of given non-null value.
     *
     * @typeParam T - the type of the value
     * @param value - the value to describe
     * @throws NullPointerException if value is null
     */
    static of<T>(value: T): Optional<Defined<T>>;
    /**
     * Returns an optional of given non-null value, otherwise an empty optional.
     */
    static ofNullable<T>(value: T): Optional<Defined<T>>;
    /**
     * Returns an empty optional with no present value to get.
     */
    static empty<T>(): Optional<Defined<T>>;
}
/**
 * Exclude undefined from type T.
 */
type Defined<T> = Exclude<T, undefined>;
export {};
