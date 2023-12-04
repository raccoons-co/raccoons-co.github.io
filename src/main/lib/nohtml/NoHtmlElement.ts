/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

export default class NoHtmlElement {

    private readonly element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    public getNode(): HTMLElement {
        return this.element;
    }
}
