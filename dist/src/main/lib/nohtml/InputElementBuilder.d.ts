import AbstractElementBuilder from "./AbstractElementBuilder.js";
import Input from "./Input.js";
export default interface InputElementBuilder extends AbstractElementBuilder<Input, HTMLInputElement> {
    setType(type: string): this;
}
