/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */
import DivContainer from "../lib/nohtml/DivContainer.js";
import Form from "../lib/nohtml/Form.js";
import Button from "../lib/nohtml/Button.js";
import Header from "../lib/nohtml/Header.js";
import LabeledInputRow from "../lib/nohtml/component/LabeledInputRow.js";
export default class AuthenticationPage {
    constructor(pageRoot) {
        this.pageRoot = pageRoot;
        this.render();
    }
    render() {
        const form = Form.newBuilder()
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
        const buttonRow = DivContainer.newBuilder()
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
    onSignIn(callback) {
        this.signInButton
            .getNode()
            .addEventListener("click", (event) => {
            event.stopPropagation();
            event.preventDefault();
            callback();
        });
        return this;
    }
}
