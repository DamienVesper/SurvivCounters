import Component from '../Component';

class AdrenCounter extends Component {
    text: HTMLSpanElement

    constructor () {
        super();

        this.text = document.createElement(`span`);

        this.element.id = `adrenWrapper`;
        this.element.classList.add(`box-container`);

        this.element.appendChild(this.text);
        document.querySelector(`#bottomWrapper`).appendChild(this.element);
    }

    /**
     * Calculate current player adrenaline.
     * @returns number
     */
    calculateAdren = (): number => {
        let adrenPercentage = 0;
        const boosts = document.querySelectorAll(`.ui-boost-base .ui-bar-inner`);

        boosts.forEach((boost: HTMLDivElement, i: number) => {
            if (i <= 1) adrenPercentage += parseInt(boost.style.width.slice(0, boost.style.width.length - 1)) / 4;
            else if (i === 2) adrenPercentage += parseInt(boost.style.width.slice(0, boost.style.width.length - 1)) / 2.5;
            else if (i === 3) adrenPercentage += parseInt(boost.style.width.slice(0, boost.style.width.length - 1)) / 10;
        });

        return Math.round(adrenPercentage);
    }

    /**
     * Update the adrenaline counter.
     */
    updateAdren = (): void => {
        const adren = this.calculateAdren();

        this.text.innerHTML = `AD: ${adren}`;
        this.element.hidden = adren === 0;
    }
}

export default AdrenCounter;
