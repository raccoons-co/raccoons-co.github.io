/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import DivContainer from "../lib/nohtml/DivContainer.js";

export default class AuthenticationPage {

    private readonly pageRoot: HTMLElement;

    constructor(pageRoot: HTMLElement) {
        this.pageRoot = pageRoot;
        this.render();
    }

    private render(): void {
        DivContainer.newBuilder()
            .withParent(this.pageRoot)
            .withInnerHtml("Authentication Page")
            .build();
    }
}
