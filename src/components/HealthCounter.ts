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
     */
    calculateHealth = (): number => {
        const healthBar = document.querySelector(`#ui-health-actual`);
        return Math.round(healthBar.clientWidth / 4);
    }

    /**
     * Update the health counter.
     */
    updateHealth = (): void => {
        const hp = this.calculateHealth();

        this.text.innerHTML = `HP: ${hp}`;
        this.element.style.display = (hp === 0 || hp === 100) ? `none` : `inline-block`;
    }
}

export default HealthCounter;
