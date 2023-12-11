import Optional from "../../../../ethics/src/main/Optional.js";
export default class SpaRedirectMap {
    private readonly redirects;
    private constructor();
    static newBuilder(): SpaRedirectMapBuilder;
    getTarget(sourcePage: string): Optional<string>;
}
interface SpaRedirectMapBuilder {
    addRedirect(sourcePage: string, targetPage: string): this;
    build(): SpaRedirectMap;
}
export {};
