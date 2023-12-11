import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";
export default class Label extends NoHtmlElement<HTMLLabelElement> {
    static newBuilder(): AbstractElementBuilder<Label, HTMLLabelElement>;
}
