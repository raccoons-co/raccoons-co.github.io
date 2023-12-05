/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";

export default class Input extends NoHtmlElement {

    public static newBuilder(): InputElementBuilder {
        return new class extends AbstractElementBuilder<Input> implements InputElementBuilder {

            constructor() {
                super("input");
            }

            /** Sets input control type. */
            public setType(type: string): this {
                (this.element as HTMLInputElement).type = type;
                return this;
            }
        }
    }
}

interface InputElementBuilder extends AbstractElementBuilder<Input> {
    setType(type: string): this;
}
