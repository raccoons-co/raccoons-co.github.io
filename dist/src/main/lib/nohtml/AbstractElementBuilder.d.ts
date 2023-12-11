export default abstract class AbstractElementBuilder<T, E extends HTMLElement> {
    protected readonly element: E;
    protected constructor(tagName: string);
    setParent(parent: HTMLElement): this;
    setClassName(className: string): this;
    setInnerHtml(value: string): this;
    /** Sets text content on a node. */
    setTextContent(textContent: string): this;
    build(): T;
}
