/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import DivContainer from "../lib/nohtml/DivContainer.js";
import Form from "../lib/nohtml/Form.js";
import Button from "../lib/nohtml/Button.js";
import Method from "../lib/router/Method.js";
import Header from "../lib/nohtml/Header.js";
import Label from "../lib/nohtml/Label.js";
import NoHtmlElement from "../lib/nohtml/NoHtmlElement.js";
import Input from "../lib/nohtml/Input.js";

export default class AuthenticationPage {

    private readonly pageRoot: HTMLElement;
    private signInButton?: Button;

    constructor(pageRoot: HTMLElement) {
        this.pageRoot = pageRoot;
        this.render();
    }

    private render(): void {
        const form =
            Form.newBuilder()
                .setParent(this.pageRoot)
                .setClassName("form")
                .build();

        Header.newBuilder()
            .setParent(form.getNode())
            .setInnerHtml("<h1>Raccoonizer</h1>")
            .build();

        this.usernameRow(form);

        const buttonRow =
            DivContainer.newBuilder()
                .setParent(form.getNode())
                .setTextContent("Authentication Page")
                .setClassName("myrow clearfix")
                .build();

        this.signInButton =
            Button.newBuilder()
                .setParent(buttonRow.getNode())
                .setTextContent("Sign in")
                .setClassName("mybtn")
                .build();
    }

    public onSignIn(callback: Method): this {
        this.signInButton!
            .getNode()
            .addEventListener("click", (event: MouseEvent) => {
                event.stopPropagation();
                event.preventDefault();

                callback();
            });
        return this;
    }

    private usernameRow(parent: NoHtmlElement): void {
        const usernameRow =
            DivContainer.newBuilder()
                .setParent(parent.getNode())
                .setClassName("myrow clearfix")
                .build();

        Label.newBuilder()
            .setParent(usernameRow.getNode())
            .setTextContent("Username")
            .build();

        const myrowUsernameInput =
            DivContainer.newBuilder()
                .setParent(usernameRow.getNode())
                .setClassName('myrow-input')
                .build();

            Input.newBuilder()
                .setParent(myrowUsernameInput.getNode())
                .setType('text')
                .build();

    }
}
