import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";
export default class Header extends NoHtmlElement<HTMLElement> {
    static newBuilder(): AbstractElementBuilder<Header, HTMLElement>;
}
