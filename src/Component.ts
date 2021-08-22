class Component {
    element: HTMLDivElement

    constructor () {
        this.element = document.createElement(`div`);
    }

    destroy = (): void => {
        this.element.remove();
    }
}

export default Component;
