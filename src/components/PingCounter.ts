import Component from '../Component';

class PingCounter extends Component {
    text: HTMLSpanElement;
    ping: number;

    constructor () {
        super();

        this.text = document.createElement(`span`);

        this.element.id = `pingWrapper`;
        this.element.classList.add(`box-container`);

        this.element.appendChild(this.text);
        document.querySelector(`#ui-top-left`)?.appendChild(this.element);

        this.ping = 0;

        // Start calculating the FPS.
        this.calculatePing();
    }

    /**
     * Calculate the amount of ping the player has.
     */
    calculatePing = (): number => {
        return 0;
    };

    /**
     * Update the ping counter.
     */
    updatePing = (): void => {
        this.text.innerHTML = `${this.ping} MS`;
    };
}

export default PingCounter;
