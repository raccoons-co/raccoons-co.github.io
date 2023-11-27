/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */


import DivContainer from "./lib/nohtml/DivContainer.js";

export default class ApplicationUI {

    private readonly root: HTMLElement;

    constructor(root: HTMLElement) {
        this.root = root;
    }

    public static atNode(parent: HTMLElement): ApplicationUI {
        return new ApplicationUI(parent);
    }

    public run(): void {
        DivContainer.newBuilder()
            .withParent(this.root)
            .build();
    }
}
