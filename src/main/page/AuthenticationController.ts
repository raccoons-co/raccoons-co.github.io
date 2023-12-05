/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import AuthenticationPage from "./AuthenticationPage.js";
import SpaRouter from "../lib/router/SpaRouter.js";

export default class AuthenticationController {

    private readonly DASHBOARD_PAGE = "/dashboard";

    public handle(pageRoot: HTMLElement): void {
        pageRoot.innerHTML = "";
        new AuthenticationPage(pageRoot)
            .onSignIn(()=>{
                SpaRouter.redirectTo(this.DASHBOARD_PAGE)
            });
    }
}
