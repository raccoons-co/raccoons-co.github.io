/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";

export default class Label extends NoHtmlElement {

    public static newBuilder(): AbstractElementBuilder<Label> {
        return new class extends AbstractElementBuilder<Label>{

            constructor() {
                super("label");
            }
        }
    }
}
