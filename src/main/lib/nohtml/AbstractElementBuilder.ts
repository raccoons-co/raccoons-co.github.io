/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

export default abstract class AbstractElementBuilder<T> {

    private readonly element: HTMLElement;

    protected constructor(tagName: string) {
        this.element = document.createElement(tagName);
    }

    public withParent(parent: HTMLElement): this {
        parent.appendChild(this.element);
        return this;
    }

    abstract build(): T
}
