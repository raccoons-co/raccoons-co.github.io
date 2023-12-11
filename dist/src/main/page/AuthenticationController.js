/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */
import AuthenticationPage from "./AuthenticationPage.js";
import SpaRouter from "../lib/router/SpaRouter.js";
export default class AuthenticationController {
    constructor() {
        this.DASHBOARD_PAGE = "/dashboard";
    }
    handle(pageRoot) {
        pageRoot.innerHTML = "";
        new AuthenticationPage(pageRoot)
            .onSignIn(() => {
            SpaRouter.redirectTo(this.DASHBOARD_PAGE);
        });
    }
}
