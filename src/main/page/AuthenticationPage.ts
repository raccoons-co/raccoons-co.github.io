/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import DivContainer from "../lib/nohtml/DivContainer.js";
import PageHashUrl from "../lib/PageHashUrl.js";
import AbstractPage from "./AbstractPage.js";

@PageHashUrl("/auth")
export default class AuthenticationPage extends AbstractPage {

    protected render(pageRoot: HTMLElement): void {
        DivContainer.newBuilder()
            .withParent(pageRoot)
            .withInnerHtml("Authentication Page")
            .build();
    }
}
