// Counters.
import FPSCounter from './components/FPSCounter';
import PingCounter from './components/PingCounter';

import AdrenCounter from './components/AdrenCounter';
import HealthCounter from './components/HealthCounter';

// Utilities.
import BottomWrapper from './utils/BottomWrapper';

interface CoreConfig {
    counters: {
        fps: FPSCounter;
        ping: PingCounter;
        adren: AdrenCounter;
        health: HealthCounter;
    }
    utils: {
        bottomWrapper: BottomWrapper;
    }
};

const Core: CoreConfig = {
    utils: {
        bottomWrapper: new BottomWrapper() // This needs to be initialized first!
    },

    counters: {
        fps: new FPSCounter(),
        ping: new PingCounter(),
        adren: new AdrenCounter(),
        health: new HealthCounter()
    }
};

export default Core;
