/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */
import DivContainer from "../lib/nohtml/DivContainer.js";
export default class DashboardPage {
    constructor(pageRoot) {
        this.pageRoot = pageRoot;
        this.render();
    }
    render() {
        const dashboard = DivContainer.newBuilder()
            .setParent(this.pageRoot)
            .setClassName("container page-container")
            .build();
        DivContainer.newBuilder()
            .setParent(dashboard.getNode())
            .setClassName("file-browser")
            .setTextContent("Some")
            .build();
    }
}
