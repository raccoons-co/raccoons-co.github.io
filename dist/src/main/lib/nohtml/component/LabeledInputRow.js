/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */
import DivContainer from "../DivContainer.js";
import Label from "../Label.js";
import Input from "../Input.js";
export default class LabeledInputRow {
    constructor(parent, label, inputType) {
        this.parent = parent;
        this.label = label;
        this.inputType = inputType;
        this.render();
    }
    static newBuilder() {
        return new class {
            constructor() {
                this.parent = {};
                this.labelName = "Undefined";
                this.inputType = "text";
            }
            setParent(parent) {
                this.parent = parent;
                return this;
            }
            setLabel(name) {
                this.labelName = name;
                return this;
            }
            setInputType(type) {
                this.inputType = type;
                return this;
            }
            build() {
                return new LabeledInputRow(this.parent, this.labelName, this.inputType);
            }
        };
    }
    render() {
        const usernameRow = DivContainer.newBuilder()
            .setParent(this.parent)
            .setClassName("myrow clearfix")
            .build();
        Label.newBuilder()
            .setParent(usernameRow.getNode())
            .setTextContent(this.label)
            .build();
        const myrowInput = DivContainer.newBuilder()
            .setParent(usernameRow.getNode())
            .setClassName("myrow-input")
            .build();
        Input.newBuilder()
            .setParent(myrowInput.getNode())
            .setType(this.inputType)
            .build();
    }
}
