import Method from "../lib/router/Method.js";
export default class AuthenticationPage {
    private readonly pageRoot;
    private signInButton?;
    constructor(pageRoot: HTMLElement);
    private render;
    onSignIn(callback: Method): this;
    private usernameRow;
}
