/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";

export default class Header extends NoHtmlElement {

    public static newBuilder(): AbstractElementBuilder<Header> {
        return new class extends AbstractElementBuilder<Header>{

            constructor() {
                super("header");
            }
        }
    }
}
