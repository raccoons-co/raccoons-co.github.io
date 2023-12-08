/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";

export default class Header extends NoHtmlElement<HTMLElement> {

    public static newBuilder(): AbstractElementBuilder<Header, HTMLElement> {
        return new class extends AbstractElementBuilder<Header, HTMLElement>{

            constructor() {
                super("header");
            }
        }
    }
}
