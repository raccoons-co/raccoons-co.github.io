/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import AuthenticationPage from "./AuthenticationPage.js";

export default class AuthenticationController {

    public handle(pageRoot: HTMLElement): void {
        pageRoot.innerHTML = "";
        new AuthenticationPage(pageRoot);
    }
}
