import SpaPageMap from "./SpaPageMap.js";
import SpaRedirectMap from "./SpaRedirectMap.js";
export default class SpaRouter {
    private readonly pageMap;
    private readonly redirects;
    private readonly pageRoot;
    constructor(pageMap: SpaPageMap, redirects: SpaRedirectMap, pageRoot: HTMLElement);
    /** Runs this router. */
    run(): void;
    static redirectTo(targetPage: string): void;
    private init;
    private pageChangeHandler;
    private static currentPage;
}
