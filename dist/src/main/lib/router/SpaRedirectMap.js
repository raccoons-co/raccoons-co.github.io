/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */
import Optional from "../../../../ethics/src/main/Optional.js";
export default class SpaRedirectMap {
    constructor(redirects) {
        this.redirects = redirects;
    }
    static newBuilder() {
        return new class {
            constructor() {
                this.redirects = new Map();
            }
            addRedirect(sourcePage, targetPage) {
                this.redirects.set(sourcePage, targetPage);
                return this;
            }
            build() {
                return new SpaRedirectMap(this.redirects);
            }
        };
    }
    getTarget(sourcePage) {
        return Optional.ofNullable(this.redirects.get(sourcePage));
    }
}
