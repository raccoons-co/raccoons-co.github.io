/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import DivContainer from "../DivContainer.js";
import Label from "../Label.js";
import Input from "../Input.js";

export default class LabeledInputRow {

    private readonly parent: HTMLElement;
    private readonly label: string;
    private readonly inputType: string;

    private constructor(parent: HTMLElement, label: string, inputType: string) {
        this.parent = parent;
        this.label = label;
        this.inputType = inputType;
        this.render();
    }

    public static newBuilder(): LabeledInputRowBuilder {
        return new class implements LabeledInputRowBuilder {

            private parent: HTMLElement = <HTMLElement>{};
            private labelName: string = "Undefined";
            private inputType: string = "text";

            public setParent(parent: HTMLElement): this {
                this.parent = parent;
                return this;
            }

            public setLabel(name: string): this {
                this.labelName = name;
                return this;
            }

            public setInputType(type: string): this {
                this.inputType = type;
                return this;
            }

            build(): LabeledInputRow {
                return new LabeledInputRow(this.parent, this.labelName, this.inputType);
            }
        }
    }

    private render(): void {
        const usernameRow =
            DivContainer.newBuilder()
                .setParent(this.parent)
                .setClassName("myrow clearfix")
                .build();

        Label.newBuilder()
            .setParent(usernameRow.getNode())
            .setTextContent(this.label)
            .build();

        const myrowInput =
            DivContainer.newBuilder()
                .setParent(usernameRow.getNode())
                .setClassName("myrow-input")
                .build();

        Input.newBuilder()
            .setParent(myrowInput.getNode())
            .setType(this.inputType)
            .build();
    }
}

interface LabeledInputRowBuilder {
    setParent(parent: HTMLElement): this;

    setLabel(name: string): this;

    setInputType(type: string): this;

    build(): LabeledInputRow;
}
