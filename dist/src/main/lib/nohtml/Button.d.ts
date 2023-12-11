import NoHtmlElement from "./NoHtmlElement.js";
import AbstractElementBuilder from "./AbstractElementBuilder.js";
export default class Button extends NoHtmlElement<HTMLButtonElement> {
    static newBuilder(): AbstractElementBuilder<Button, HTMLButtonElement>;
}
