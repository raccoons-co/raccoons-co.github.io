/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */
import AuthenticationPage from "./AuthenticationPage.js";
import SpaRouter from "../lib/router/SpaRouter.js";
import Controller from "./Controller.js";
export default class AuthenticationController extends Controller {
    constructor() {
        super(...arguments);
        this.DASHBOARD_PAGE = "/dashboard";
    }
    handler(pageRoot) {
        pageRoot.innerHTML = "";
        new AuthenticationPage(pageRoot)
            .onSignIn(() => {
            SpaRouter.redirectTo(this.DASHBOARD_PAGE);
        });
    }
}
