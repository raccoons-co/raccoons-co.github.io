/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import NoHtmlElement from "./NoHtmlElement.js";

export default abstract class AbstractElementBuilder<T, E extends HTMLElement> {

    protected readonly element: E;

    protected constructor(tagName: string) {
        this.element = <E>document.createElement(tagName);
    }

    public setParent(parent: HTMLElement): this {
        parent.appendChild(this.element);
        return this;
    }

    public setClassName(className: string): this {
        this.element.className = className;
        return this;
    }

    public setInnerHtml(value: string): this {
        this.element.innerHTML = value;
        return this;
    }

    /** Sets text content on a node. */
    public setTextContent(textContent: string): this {
        this.element.textContent = textContent;
        return this;
    }

    public build(): T {
        return <T>new NoHtmlElement<E>(this.element);
    }
}
