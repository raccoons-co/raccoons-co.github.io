/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */
export default class NoHtmlElement {
    constructor(element) {
        this.element = element;
    }
    getNode() {
        return this.element;
    }
}
