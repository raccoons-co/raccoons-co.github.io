/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import SpaPageMap from "./SpaPageMap.js";
import SpaRedirectMap from "./SpaRedirectMap.js";

export default class SpaRouter {

    private readonly pageMap: SpaPageMap;
    private readonly redirects: SpaRedirectMap;
    private readonly pageRoot: HTMLElement;

    constructor(pageMap: SpaPageMap, redirects: SpaRedirectMap, pageRoot: HTMLElement) {
        this.pageMap = pageMap;
        this.redirects = redirects;
        this.pageRoot = pageRoot;
        this.init();
    }

    /**
     * Runs this router.
     */
    run(): void {
        this.pageChangeHandler();
    }

    private init(): void {
        window.addEventListener("hashchange", () => this.pageChangeHandler());
    }

    private pageChangeHandler(): void {

        const currentPage = SpaRouter.currentPage();

        const maybeRedirect = this.redirects.getTarget(currentPage);

        maybeRedirect.ifPresentOrElse(
            SpaRouter.redirectTo,
            () => {
                const maybeController = this.pageMap.pageController(currentPage);
                maybeController.ifPresent((controller) => controller.handle(this.pageRoot));
            }
        );
    }

    private static currentPage(): string {
        const hash = window.location.hash || "#/";
        return hash.slice(1).toLowerCase();
    }


    private static redirectTo(targetPage: string): void {
        window.location.hash = "#" + targetPage;
    }
}
