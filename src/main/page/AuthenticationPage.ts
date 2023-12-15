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
import LabeledInputRow from "../lib/nohtml/component/LabeledInputRow.js";

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

        LabeledInputRow.newBuilder()
            .setParent(form.getNode())
            .setLabel("Username")
            .build();

        LabeledInputRow.newBuilder()
            .setParent(form.getNode())
            .setLabel("Password")
            .setInputType("password")
            .build();

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
}
