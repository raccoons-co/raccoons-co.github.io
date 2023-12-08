/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";

export default class Label extends NoHtmlElement<HTMLLabelElement> {

    public static newBuilder(): AbstractElementBuilder<Label, HTMLLabelElement> {
        return new class extends AbstractElementBuilder<Label, HTMLLabelElement>{

            constructor() {
                super("label");
            }
        }
    }
}
