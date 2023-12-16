/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import SpaRouter from "./lib/router/SpaRouter.js";
import SpaPageMap from "./lib/router/SpaPageMap.js";
import AuthenticationController from "./page/AuthenticationController.js";
import SpaRedirectMap from "./lib/router/SpaRedirectMap.js";
import DashboardController from "./page/DashboardController.js";

export default class ApplicationUI {

    private readonly root: HTMLElement;

    constructor(root: HTMLElement) {
        this.root = root;
    }

    public static atNode(parent: HTMLElement): ApplicationUI {
        return new ApplicationUI(parent);
    }

    public run(): void {
        const spaPageMap =
            SpaPageMap.newBuilder()
                .addPageController("/auth", new AuthenticationController())
                .addPageController("/dashboard", new DashboardController())
                .build();

        const redirects =
            SpaRedirectMap.newBuilder()
                .addRedirect("/", "/auth")
                .build();

        new SpaRouter(spaPageMap, redirects, this.root).run();
    }
}
