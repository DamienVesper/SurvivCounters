// Network counters.
import FPSCounter from './components/FPSCounter';
import PingCounter from './components/PingCounter';

// Vitals counters.
import AdrenCounter from './components/AdrenCounter';
import HealthCounter from './components/HealthCounter';

interface CoreConfig {
    fpsCounter: FPSCounter,
    pingCounter: PingCounter,
    adrenCounter: AdrenCounter,
    healthCounter: HealthCounter
};

const Core: CoreConfig = {
    fpsCounter: new FPSCounter(),
    pingCounter: new PingCounter(),
    adrenCounter: new AdrenCounter(),
    healthCounter: new HealthCounter()
};

export default Core;
