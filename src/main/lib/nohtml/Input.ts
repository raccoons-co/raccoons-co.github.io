/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";
import InputElementBuilder from "./InputElementBuilder.js";

export default class Input extends NoHtmlElement<HTMLInputElement> {

    public static newBuilder(): InputElementBuilder {
        return new class extends AbstractElementBuilder<Input, HTMLInputElement> implements InputElementBuilder {

            constructor() {
                super("input");
            }

            /** Sets input control type. */
            public setType(type: string): this {
                this.element.type = type;
                return this;
            }
        }
    }
}

