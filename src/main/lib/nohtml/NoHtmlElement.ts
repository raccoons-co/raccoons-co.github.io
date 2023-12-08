/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

export default class NoHtmlElement<E> {

    private readonly element: E;

    constructor(element: E) {
        this.element = element;
    }

    public getNode(): E {
        return this.element;
    }
}
