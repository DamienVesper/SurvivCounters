import Component from '../Component';

class BottomWrapper extends Component {
    constructor () {
        super();

        this.element.id = `bottomWrapper`;

        document.querySelector(`#ui-bottom-center-0`).insertBefore(this.element, document.querySelector(`#ui-boost-counter`));

        // Remove the extra bottom margin if an older version of surviv is runnnig.
        if (window.location.hostname === `c79geyxwmp1zpas3qxbddzrtytffta.ext-twitch.tv`) this.element.style.marginBottom = `0px`;
    }
}

export default BottomWrapper;
