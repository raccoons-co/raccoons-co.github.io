export default class ApplicationUI {
    private readonly root;
    constructor(root: HTMLElement);
    static atNode(parent: HTMLElement): ApplicationUI;
    run(): void;
}
