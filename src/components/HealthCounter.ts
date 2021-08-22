import Component from '../Component';

class HealthCounter extends Component {
    text: HTMLSpanElement

    constructor () {
        super();

        this.text = document.createElement(`span`);

        this.element.id = `hpWrapper`;
        this.element.classList.add(`box-container`);

        this.element.appendChild(this.text);
        document.querySelector(`#bottomWrapper`).appendChild(this.element);
    }

    /**
     * Calculate current player health.
     * @returns number
     */
    calculateHealth = (): number => {
        const healthBar = document.querySelector(`#ui-health-actual`);
        return Math.round(healthBar.clientWidth / 4);
    }

    /**
     * Update the health counter.
     */
    updateHealth = (): void => {
        this.text.innerHTML = `HP: ${this.calculateHealth()}`;
    }
}

export default HealthCounter;
