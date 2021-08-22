// ==UserScript==
// @name         Surviv.io Counters
// @namespace    https://alru.ga
// @version      2.0.0
// @description  An ingame counter overlay to view connection stats and in-game health stats.
// @author       DamienVesper
// @match        *://surviv.io/*
// @match        *://surviv2.io/*
// @match        *://2dbattleroyale.com/*
// @match        *://2dbattleroyale.org/*
// @match        *://piearesquared.info/*
// @match        *://thecircleisclosing.com/*
// @match        *://parmainitiative.com/*
// @match        *://ot38.club/*
// @match        *://c79geyxwmp1zpas3qxbddzrtytffta.ext-twitch.tv/c79geyxwmp1zpas3qxbddzrtytffta/1.0.2/ce940530af57d2615ac39c266fe9679d/*
// @match        *://*.c79geyxwmp1zpas3qxbddzrtytffta.ext-twitch.tv/c79geyxwmp1zpas3qxbddzrtytffta/1.0.2/ce940530af57d2615ac39c266fe9679d/*
// @match        *://twitch.tv/popout/survivio/extensions/c79geyxwmp1zpas3qxbddzrtytffta/*
// @match        *://*.twitch.tv/popout/survivio/extensions/c79geyxwmp1zpas3qxbddzrtytffta/*
// @grant        GM_xmlHttpRequest
// ==/UserScript==

// Import styles.
import '../assets/scss/common.scss';

import Core from './Core';

const init = (): void => {
    setInterval(Core.counters.fps.updateFPS, 1e3); // Update FPS every second.
    // setInterval(Core.counters.ping.updatePing, 1e3); // Update ping every second.

    setInterval(Core.counters.health.updateHealth, 25); // Update health every 25ms.
    setInterval(Core.counters.adren.updateAdren, 25); // Update adren every 25ms.
};

window.onload = () => {
    init();
};
