/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */
import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";
export default class Input extends NoHtmlElement {
    static newBuilder() {
        return new class extends AbstractElementBuilder {
            constructor() {
                super("input");
            }
            /** Sets input control type. */
            setType(type) {
                this.element.type = type;
                return this;
            }
        };
    }
}
