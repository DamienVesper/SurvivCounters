import Component from '../Component';

class FPSCounter extends Component {
    text: HTMLSpanElement

    frameTimes: number[]

    constructor () {
        super();

        this.text = document.createElement(`span`);
        this.frameTimes = [];

        this.element.id = `fpsWrapper`;
        this.element.classList.add(`box-container`);

        this.element.appendChild(this.text);
        document.querySelector(`#ui-top-left`).appendChild(this.element);

        // Start calculating the FPS.
        this.calculateFPS();
    }

    /**
     * Calculate the current FPS.
     * @author Quintec Music
     */
    calculateFPS = (): void => {
        window.requestAnimationFrame(() => {
            // Get the current timestamp.
            const now = performance.now();

            // Shift a second's worth of frametimes.
            while (this.frameTimes.length > 0 && this.frameTimes[0] <= now - 1000) this.frameTimes.shift();

            // Push current frametimes.
            this.frameTimes.push(now);

            // Loop the method.
            this.calculateFPS();
        });
    }

    /**
     * Update the FPS counter.
     */
    updateFPS = (): void => {
        this.text.innerHTML = `${this.frameTimes.length} FPS`;
    }
}

export default FPSCounter;
