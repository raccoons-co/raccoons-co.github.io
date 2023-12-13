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

        this.labledInputRow(form.getNode(), "Username", "text");
        this.labledInputRow(form.getNode(), "Password", "password");

        const buttonRow =
            DivContainer.newBuilder()
                .setParent(form.getNode())
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

    private labledInputRow(parent: HTMLElement, label: string, type: string): void {
        const usernameRow =
            DivContainer.newBuilder()
                .setParent(parent)
                .setClassName("myrow clearfix")
                .build();

        Label.newBuilder()
            .setParent(usernameRow.getNode())
            .setTextContent(label)
            .build();

        const myrowInput =
            DivContainer.newBuilder()
                .setParent(usernameRow.getNode())
                .setClassName("myrow-input")
                .build();

        Input.newBuilder()
            .setParent(myrowInput.getNode())
            .setType(type)
            .build();
    }
}
