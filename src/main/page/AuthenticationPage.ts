/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import DivContainer from "../lib/nohtml/DivContainer.js";
import Button from "../lib/nohtml/Button.js";

export default class AuthenticationPage {

    private readonly pageRoot: HTMLElement;

    constructor(pageRoot: HTMLElement) {
        this.pageRoot = pageRoot;
        this.render();
    }

    private render(): void {
        const someDiv =
            DivContainer.newBuilder()
                .setParent(this.pageRoot)
                .setTextContent("Authentication Page")
                .build();

        Button.newBuilder()
            .setParent(someDiv.getNode())
            .setTextContent("Sign in")
            .build();
    }
}
