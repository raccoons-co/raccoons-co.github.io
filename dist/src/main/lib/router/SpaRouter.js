/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */
export default class SpaRouter {
    constructor(pageMap, redirects, pageRoot) {
        this.pageMap = pageMap;
        this.redirects = redirects;
        this.pageRoot = pageRoot;
        this.init();
    }
    /** Runs this router. */
    run() {
        this.pageChangeHandler();
    }
    static redirectTo(targetPage) {
        window.location.hash = "#" + targetPage;
    }
    init() {
        window.addEventListener("hashchange", () => this.pageChangeHandler());
    }
    pageChangeHandler() {
        const currentPage = SpaRouter.currentPage();
        const maybeRedirect = this.redirects.getTarget(currentPage);
        maybeRedirect.ifPresentOrElse(SpaRouter.redirectTo, () => {
            const maybeController = this.pageMap.pageController(currentPage);
            maybeController.ifPresent((controller) => controller.handle(this.pageRoot));
        });
    }
    static currentPage() {
        const hash = window.location.hash || "#/";
        return hash.slice(1).toLowerCase();
    }
}
