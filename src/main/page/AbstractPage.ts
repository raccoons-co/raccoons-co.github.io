/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

export default abstract class AbstractPage {

    public handle(pageRoot: HTMLElement) {
        this.render(pageRoot);
    }

    protected abstract render(pageRoot: HTMLElement): void;
}
