import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";
export default class DivContainer extends NoHtmlElement<HTMLDivElement> {
    static newBuilder(): AbstractElementBuilder<DivContainer, HTMLDivElement>;
}
