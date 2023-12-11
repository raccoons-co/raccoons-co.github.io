/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */
import Optional from "../../../../ethics/src/main/Optional.js";
export default class SpaPageMap {
    constructor(pageMap) {
        this.pageMap = pageMap;
    }
    static newBuilder() {
        return new class {
            constructor() {
                this.pageMap = new Map();
            }
            addPageController(pageHashUrl, pageController) {
                this.pageMap.set(pageHashUrl, pageController);
                return this;
            }
            build() {
                return new SpaPageMap(this.pageMap);
            }
        };
    }
    pageController(pageHashUrl) {
        return Optional.ofNullable(this.pageMap.get(pageHashUrl));
    }
}
