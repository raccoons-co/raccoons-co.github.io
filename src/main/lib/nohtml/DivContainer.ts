/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import AbstractElementBuilder from "./AbstractElementBuilder.js";

export default class DivContainer {

    private constructor() {
    }

    public static newBuilder(): AbstractElementBuilder<DivContainer> {
        return new class extends AbstractElementBuilder<DivContainer>{

            constructor() {
                super("div");
            }

            public build(): DivContainer {
                return new DivContainer();
            }
        }
    }
}
