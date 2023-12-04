/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";

export default class Button extends NoHtmlElement {

    public static newBuilder(): AbstractElementBuilder<Button> {
        return new class extends AbstractElementBuilder<Button>{

            constructor() {
                super("button");
            }
        }
    }
}
