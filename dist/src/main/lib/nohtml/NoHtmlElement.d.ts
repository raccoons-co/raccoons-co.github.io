export default class NoHtmlElement<E> {
    private readonly element;
    constructor(element: E);
    getNode(): E;
}
