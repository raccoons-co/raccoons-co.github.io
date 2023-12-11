import NoHtmlElement from "./NoHtmlElement.js";
import InputElementBuilder from "./InputElementBuilder.js";
export default class Input extends NoHtmlElement<HTMLInputElement> {
    static newBuilder(): InputElementBuilder;
}
