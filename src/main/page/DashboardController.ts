/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import DashboardPage from "./DashboardPage.js";
import Controller from "./Controller.js";

export default class DashboardController extends Controller {

    protected handler(pageRoot: HTMLElement): void {
        new DashboardPage(pageRoot);
    }
}
