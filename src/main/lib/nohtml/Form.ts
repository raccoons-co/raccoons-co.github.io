/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";

export default class Form extends NoHtmlElement {

    public static newBuilder(): AbstractElementBuilder<Form> {
        return new class extends AbstractElementBuilder<Form>{

            constructor() {
                super("form");
            }
        }
    }
}
