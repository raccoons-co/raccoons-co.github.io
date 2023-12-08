/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";

export default class Button extends NoHtmlElement<HTMLButtonElement> {

    public static newBuilder(): AbstractElementBuilder<Button, HTMLButtonElement> {
        return new class extends AbstractElementBuilder<Button, HTMLButtonElement>{

            constructor() {
                super("button");
            }
        }
    }
}
