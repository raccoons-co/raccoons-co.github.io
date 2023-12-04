/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";

export default class DivContainer extends NoHtmlElement {

    public static newBuilder(): AbstractElementBuilder<DivContainer> {
        return new class extends AbstractElementBuilder<DivContainer>{

            constructor() {
                super("div");
            }
        }
    }
}
