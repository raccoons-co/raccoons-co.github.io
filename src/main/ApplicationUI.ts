/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import SpaRouter from "./lib/router/SpaRouter.js";
import SpaPageMap from "./lib/router/SpaPageMap.js";
import AuthenticationController from "./page/AuthenticationController.js";

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
                .build();

        new SpaRouter(spaPageMap, this.root).run()  ;
    }
}
