/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */
import DivContainer from "../lib/nohtml/DivContainer.js";
import Form from "../lib/nohtml/Form.js";
import Button from "../lib/nohtml/Button.js";
import Header from "../lib/nohtml/Header.js";
import Label from "../lib/nohtml/Label.js";
import Input from "../lib/nohtml/Input.js";
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
        this.usernameRow(form.getNode());
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
    usernameRow(parent) {
        const usernameRow = DivContainer.newBuilder()
            .setParent(parent)
            .setClassName("myrow clearfix")
            .build();
        Label.newBuilder()
            .setParent(usernameRow.getNode())
            .setTextContent("Username")
            .build();
        const myrowUsernameInput = DivContainer.newBuilder()
            .setParent(usernameRow.getNode())
            .setClassName("myrow-input")
            .build();
        Input.newBuilder()
            .setParent(myrowUsernameInput.getNode())
            .setType("text")
            .build();
    }
}
