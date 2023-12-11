/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */
import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";
export default class Form extends NoHtmlElement {
    static newBuilder() {
        return new class extends AbstractElementBuilder {
            constructor() {
                super("form");
            }
        };
    }
}
