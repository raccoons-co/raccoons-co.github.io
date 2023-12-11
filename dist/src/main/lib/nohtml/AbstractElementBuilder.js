/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */
import NoHtmlElement from "./NoHtmlElement.js";
export default class AbstractElementBuilder {
    constructor(tagName) {
        this.element = document.createElement(tagName);
    }
    setParent(parent) {
        parent.appendChild(this.element);
        return this;
    }
    setClassName(className) {
        this.element.className = className;
        return this;
    }
    setInnerHtml(value) {
        this.element.innerHTML = value;
        return this;
    }
    /** Sets text content on a node. */
    setTextContent(textContent) {
        this.element.textContent = textContent;
        return this;
    }
    build() {
        return new NoHtmlElement(this.element);
    }
}
