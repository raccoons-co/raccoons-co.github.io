/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";

export default class Form extends NoHtmlElement<HTMLFormElement> {

    public static newBuilder(): AbstractElementBuilder<Form, HTMLFormElement> {
        return new class extends AbstractElementBuilder<Form, HTMLFormElement> {

            constructor() {
                super("form");
            }
        }
    }
}
