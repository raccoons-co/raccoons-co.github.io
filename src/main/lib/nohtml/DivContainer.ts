/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";

export default class DivContainer extends NoHtmlElement<HTMLDivElement> {

    public static newBuilder(): AbstractElementBuilder<DivContainer, HTMLDivElement> {
        return new class extends AbstractElementBuilder<DivContainer, HTMLDivElement> {

            constructor() {
                super("div");
            }
        }
    }
}
