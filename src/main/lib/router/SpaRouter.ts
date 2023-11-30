/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import SpaPageMap from "./SpaPageMap.js";

export default class SpaRouter {

    private readonly pageMap: SpaPageMap;
    private readonly pageRoot: HTMLElement;

    constructor(pageMap: SpaPageMap, pageRoot: HTMLElement) {
        this.pageMap = pageMap;
        this.pageRoot = pageRoot;
        this.init();
    }

    /**
     * Runs this router.
     */
    run() {
        this.pageChangeHandler();
    }

    private init(): void {
        window.addEventListener("hashchange", () => this.pageChangeHandler());
    }

    private pageChangeHandler(): void {
        const hashFragment = SpaRouter.hashFragment();
        this.pageMap
            .pageController(hashFragment)
            ?.handle(this.pageRoot);
    }

    private static hashFragment() {
        const hashFragment = window.location.hash || "#/";
        return hashFragment.slice(1).toLowerCase();
    }
}
