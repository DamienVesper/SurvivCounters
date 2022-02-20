import Component from '../Component';

class PingCounter extends Component {
    text: HTMLSpanElement;
    server: string;
    ping: number;

    constructor () {
        super();

        this.text = document.createElement(`span`);

        this.element.id = `sic-pingWrapper`;
        this.element.classList.add(`sic-box-container`);

        this.element.appendChild(this.text);
        document.querySelector(`#ui-top-left`)?.appendChild(this.element);

        this.ping = 0;

        // Determine the server that the player is playing on.
        this.determineServer();

        // Start calculating the ping.
        this.calculatePing();
    }

    determineServer = (): void => {
        const servers = [`na-nyc`, `na-chi`, `na-sfo`, `sa-sao`, `eu-waw`, `eu-fra`, `as-sgp`, `kr-sel`];
        const pingTime = new Date().valueOf();

        const serverPings: Record<string, number> = {};
        for (const server of servers) {
            const request = new XMLHttpRequest();

            request.open(`GET`, `https://${server}-p1.surviv.io`, true);
            request.onload = () => { serverPings[server] = new Date().valueOf() - pingTime; };
        }

        let lowestPing: [string, number] = [``, 0];
        for (const [server, ping] of Object.entries(serverPings)) {
            if (lowestPing[1] === 0 || ping < lowestPing[1]) lowestPing = [server, ping];
        }

        this.server = `https://${lowestPing[0]}-p1.surviv.io`;
    };

    /**
     * Calculate the amount of ping the player has.
     */
    calculatePing = (): void => {
        const pingTime = new Date().valueOf();
        const request = new XMLHttpRequest();

        request.open(`GET`, this.server, true);
        request.onload = () => { this.ping = new Date().valueOf() - pingTime; };

        setTimeout(() => this.calculatePing(), 1e3);
    };

    /**
     * Update the ping counter.
     */
    updatePing = (): void => {
        this.text.innerHTML = `${this.ping} MS`;
    };
}

export default PingCounter;
