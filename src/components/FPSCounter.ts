import Component from '../Component';

class FPSCounter extends Component {
    text: HTMLSpanElement;

    frameTimes: number[];

    constructor () {
        super();

        this.text = document.createElement(`span`);
        this.frameTimes = [];

        this.element.id = `fpsWrapper`;
        this.element.classList.add(`box-container`);

        this.element.appendChild(this.text);
        document.querySelector(`#ui-top-left`)?.appendChild(this.element);

        // Start calculating the FPS.
        this.calculateFPS();
    }

    /**
     * Calculate the current FPS.
     * @author Quintec
     */
    calculateFPS = (): void => {
        window.requestAnimationFrame(() => {
            const now = performance.now();

            while (this.frameTimes.length > 0 && this.frameTimes[0] <= now - 1000) this.frameTimes.shift();
            this.frameTimes.push(now);

            this.calculateFPS();
        });
    };

    /**
     * Update the FPS counter.
     */
    updateFPS = (): void => {
        this.text.innerHTML = `${this.frameTimes.length} FPS`;
    };
}

export default FPSCounter;
