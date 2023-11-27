import ApplicationUI from "./ApplicationUI.js";

const root  = <NonNullable<HTMLElement>>document.getElementById("Application");

ApplicationUI.atNode(root).run();
