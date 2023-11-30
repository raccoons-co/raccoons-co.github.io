/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import AuthenticationController from "../../page/AuthenticationController.js";

export default class SpaPageMap {

    private readonly pageMap: ReadonlyMap<string, AuthenticationController>;

    private constructor(pageMap: ReadonlyMap<string, AuthenticationController>) {
        this.pageMap = pageMap;
    }

    public static newBuilder(): SpaPageMapBuilder {
        return new class implements SpaPageMapBuilder {

            private readonly pageMap = new Map<string, AuthenticationController>();

            public addPageController(pageHashUrl: string, pageController: AuthenticationController): this {
                this.pageMap.set(pageHashUrl, pageController);
                return this;
            }

            build(): SpaPageMap {
                return new SpaPageMap(this.pageMap);
            }
        }
    }

    public pageController(pageHashUrl: string): AuthenticationController | undefined {
        console.log(this.pageMap)
        return this.pageMap.get(pageHashUrl);
    }
}

interface SpaPageMapBuilder {

    addPageController(pageHashUrl: string, pageController: AuthenticationController): this;

    build(): SpaPageMap;
}
