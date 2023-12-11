import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";
export default class Form extends NoHtmlElement<HTMLFormElement> {
    static newBuilder(): AbstractElementBuilder<Form, HTMLFormElement>;
}
