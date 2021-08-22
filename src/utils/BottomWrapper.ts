import Component from '../Component';

class BottomWrapper extends Component {
    constructor () {
        super();

        this.element.id = `bottomWrapper`;

        document.querySelector(`#ui-bottom-center-0`).insertBefore(this.element, document.querySelector(`#ui-boost-counter`));
    }
}

export default BottomWrapper;
