/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

export default abstract class Controller {

    /** Handles page. */
    public handle(pageRoot: HTMLElement): void {
        pageRoot.innerHTML = "";
        this.handler(pageRoot);
    }

    /** Page handler. */
    protected abstract handler(pageRoot: HTMLElement): void;
}
