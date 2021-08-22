// Import styles.
import '../assets/scss/common.scss';

import Core from './Core';

const init = (): void => {
    // Start the FPS counter.
    Core.fpsCounter.calculateFPS();
};

window.onload = () => {
    init();
};
