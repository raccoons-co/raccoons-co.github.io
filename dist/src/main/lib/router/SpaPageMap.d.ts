import AuthenticationController from "../../page/AuthenticationController.js";
import Optional from "../../../../ethics/src/main/Optional.js";
export default class SpaPageMap {
    private readonly pageMap;
    private constructor();
    static newBuilder(): SpaPageMapBuilder;
    pageController(pageHashUrl: string): Optional<AuthenticationController>;
}
interface SpaPageMapBuilder {
    addPageController(pageHashUrl: string, pageController: AuthenticationController): this;
    build(): SpaPageMap;
}
export {};
