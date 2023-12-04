/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import Optional from "../../../../ethics/src/main/Optional.js";

export default class SpaRedirectMap {

    private readonly redirects: ReadonlyMap<string, string>;

    private constructor(redirects: ReadonlyMap<string, string>) {
        this.redirects = redirects;
    }

    public static newBuilder(): SpaRedirectMapBuilder {
        return new class implements SpaRedirectMapBuilder {

            private readonly redirects = new Map<string, string>();

            public addRedirect(sourcePage: string, targetPage: string): this {
                this.redirects.set(sourcePage, targetPage);
                return this;
            }

            build(): SpaRedirectMap {
                return new SpaRedirectMap(this.redirects);
            }
        }
    }

    public getTarget(sourcePage: string): Optional<string> {
        return Optional.ofNullable(this.redirects.get(sourcePage));
    }
}

interface SpaRedirectMapBuilder {

    addRedirect(sourcePage: string, targetPage: string): this;

    build(): SpaRedirectMap;
}
