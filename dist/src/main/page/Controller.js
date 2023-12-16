/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */
export default class Controller {
    /** Handles page. */
    handle(pageRoot) {
        pageRoot.innerHTML = "";
        this.handler(pageRoot);
    }
}
