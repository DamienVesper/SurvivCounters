import Component from '../Component';

class HealthCounter extends Component {
    text: HTMLSpanElement;

    constructor () {
        super();

        this.text = document.createElement(`span`);

        this.element.id = `sic-hpWrapper`;
        this.element.classList.add(`sic-box-container`);

        this.element.appendChild(this.text);
        document.querySelector(`#sic-bottomWrapper`)?.appendChild(this.element);
    }

    /**
     * Calculate current player health.
     */
    calculateHealth = (): number => {
        const healthBar = document.querySelector(`#ui-health-actual`);
        return (healthBar != null) ? Math.round(healthBar.clientWidth / 4) : 0;
    };

    /**
     * Update the health counter.
     */
    updateHealth = (): void => {
        const hp = this.calculateHealth();

        this.text.innerHTML = `HP: ${hp}`;
        this.element.style.display = (hp === 0 || hp === 100) ? `none` : `inline-block`;
    };
}

export default HealthCounter;
