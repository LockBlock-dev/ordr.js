const { APIError, ParseError } = require("./errors"),
    { wsCodes, wsStatuses, apiCodes } = require("./constants"),
    { io } = require("socket.io-client"),
    axios = require("axios"),
    EventEmitter = require("events");

let deprecationEmitted = false;

class Client extends EventEmitter {
    /**
     * The o!rdr client.
     * @param {string} apiKey The API key.
     * @example const client = new Client("apiKey");
     */
    constructor(apiKey) {
        super();

        /**
         * The API key.
         * @type {string}
         */
        this.apiKey = apiKey;

        /**
         * The base API URL.
         * @type {string}
         */
        this.baseApiUrl = "https://ordr-api.issou.best";

        /**
         * The WebSocket URL.
         * @type {string}
         */
        this.webSocketUrl = "wss://ordr-ws.issou.best";
    }

    /**
     * Makes request against the API.
     * @private
     * @param {string} method The HTTP method.
     * @param {string} path The API endpoint.
     * @param {Object} [options] The request options.
     * @returns {Promise<Object>} The payload.
     */
    #request(method, path, data) {
        const options = {
            method,
            url: `${this.baseApiUrl}/${path}`,
            headers: {
                "User-Agent": `ordr.js ${require("../package").version} (https://github.com/LockBlock-dev/ordr.js)`,
                "Content-Type": "application/json",
                "Accept-Encoding": "UTF8"
            }
        };

        if (data) options.data = data;

        return axios(options)
            .then((response) => {
                if (typeof response.data === "object") return response.data;

                try {
                    const data = JSON.parse(response.data);

                    if (data.errorCode) {
                        data.code = data.errorCode;
                        data.error = apiCodes[data.errorCode];
                        delete data.errorCode;
                    }

                    return data;
                } catch {
                    throw new ParseError(response.data, response.status, options.method, options.url);
                }
            })
            .catch((error) => (error.type === "ParseError" ? error : new APIError(error, error.response, error.response.status, options.method, options.url)));
    }

    /**
     * Starts the o!rdr WebSocket.
     * @example client.start();
     */
    start() {
        const socket = io(this.webSocketUrl)
            .on("disconnect", (reason) => reason === "io server disconnect" && socket.connect())
            .on("render_added", (data) => {
                /**
                 * Emitted when a render is added.
                 * @event Client#render_added
                 * @type {Object}
                 * @property {number} renderID The render ID.
                 */
                this.emit("render_added", { renderID: data });
            })
            .on("render_progress", (data) => {
                const split = data.split(" ");

                let status = split[1],
                    progression = wsStatuses[status] ?? null;

                if (split[3]) {
                    status = `${split[1]} ${split[2]} ${split[3]}`;
                } else if (split[2]) {
                    progression = split[2];
                }

                /**
                 * Emitted when a render has progressed.
                 * @event Client#render_progress
                 * @type {Object}
                 * @property {number} renderID The render ID.
                 * @property {string} status The render status.
                 * @property {string | null} progression The render progress.
                 */
                this.emit("render_progress", { renderID: Number(split[0]), status, progression });
            })
            .on("render_error", (data) => {
                /**
                 * Emitted when a render has failed rendering.
                 * @event Client#render_error
                 * @deprecated
                 * @type {Object}
                 * @property {number} renderID The render ID.
                 */
                this.emit("render_error", { renderID: Number(data) });

                if (!deprecationEmitted) {
                    deprecationEmitted = true;
                    process.emitWarning("The render_error event is deprecated. Use render_failed instead", "DeprecationWarning");
                }
            })
            .on("render_failed", (data) => {
                const split = data.split(" ");

                /**
                 * Emitted when a render has failed rendering.
                 * @event Client#render_failed
                 * @type {Object}
                 * @property {number} renderID The render ID.
                 * @property {number} code The error code.
                 * @property {string} error The error message.
                 */
                this.emit("render_failed", { renderID: Number(split[0]), code: split[1], error: wsCodes[split[1]] });
            })
            .on("render_done", (data) => {
                /**
                 * Emitted when a render has done rendering.
                 * @event Client#render_done
                 * @type {Object}
                 * @property {number} renderID The render ID.
                 */
                this.emit("render_done", { renderID: data });
            });
    }

    /**
     * Creates a new render on o!rdr.
     * @param {Object} [body = {}]
     * @param {boolean} [body.BGParallax = false]
     * @param {number} [body.breakBGDim = 30]
     * @param {boolean} [body.cursorRainbow = false]
     * @param {boolean} [body.cursorRipples = false]
     * @param {boolean} [body.cursorScaleToCS = false]
     * @param {number} [body.cursorSize = 1]
     * @param {boolean} [body.cursorTrail = true]
     * @param {boolean} [body.cursorTrailGlow = false]
     * @param {boolean} [body.drawCombonumbers = true]
     * @param {boolean} [body.drawFollowPoints = true]
     * @param {number} [body.globalVolume = 50]
     * @param {number} [body.hitsoundVolume = 50]
     * @param {number} [body.inGameBGDim = 75]
     * @param {number} [body.introBGDim=0]
     * @param {boolean} [body.loadStoryboard = true]
     * @param {boolean} [body.loadVideo = true]
     * @param {number} [body.musicVolume=50]
     * @param {boolean} [body.objectsFlashToTheBeat = false]
     * @param {boolean} [body.objectsRainbow = false]
     * @param {Buffer} body.replayFile
     * @param {string} body.replayURL
     * @param {string} body.resolution
     * @param {boolean} [body.scaleToTheBeat = false]
     * @param {boolean} [body.seizureWarning = false]
     * @param {boolean} [body.showBorders = false]
     * @param {boolean} [body.showComboCounter = true]
     * @param {boolean} [body.showDanserLogo = true]
     * @param {boolean} [body.showHPBar = true]
     * @param {boolean} [body.showHitCounter = false]
     * @param {boolean} [body.showHitErrorMeter = true]
     * @param {boolean} [body.showKeyOverlay = true]
     * @param {boolean} [body.showMods = true]
     * @param {boolean} [body.showPPCounter = true]
     * @param {boolean} [body.showResultScreen = true]
     * @param {boolean} [body.showScore = true]
     * @param {boolean} [body.showScoreboard = false]
     * @param {boolean} [body.showUnstableRate = true]
     * @param {string} body.skin
     * @param {boolean} [body.skip = true]
     * @param {boolean} [body.sliderMerge = false]
     * @param {boolean} [body.sliderSnakingIn = true]
     * @param {boolean} [body.sliderSnakingOut = true]
     * @param {boolean} [body.useBeatmapColors = true]
     * @param {boolean} [body.useHitCircleColor = true]
     * @param {boolean} [body.useSkinColors = false]
     * @param {boolean} [body.useSkinCursor = true]
     * @param {boolean} [body.useSkinHitsounds = true]
     * @param {string} body.username
     * @param {string} body.devmode
     * @tutorial See the o!rdr Documentation: {@link https://ordr.issou.best/docs}
     * @example client.newRender({ replayURL: "https://url.tld/file.osr", username: "ordr.js", resolution: "1920x1080", ... });
     * @returns {Promise<Object>} The replay object.
     */
    newRender(body = {}) {
        if (this.apiKey) body.verificationKey = this.apiKey;

        if (body.devmode) {
            body.verificationKey = `devmode_${body.devmode}`;
            delete body.devmode;
        }

        delete body?.motionBlur960fps;
        return this.#request("POST", "renders", body).then((json) => (json.renderID && (json.renderID = Number(json.renderID)), json));
    }

    /**
     * Gets a list of renders. {@link https://ordr.issou.best/#/renders}
     * @param {Object} [params = {}] The query parameters.
     * @param {number} [params.pageSize = 50] The number of renders that the API will return.
     * @param {number} [params.page = 1] The page number/
     * @param {string} params.ordrUsername The o!rdr username to query.
     * @param {string} params.replayUsername The osu! replay username to query.
     * @param {number} params.renderID The o!rdr render ID to query.
     * @param {boolean} [params.nobots = false] Whether to hide bots from the returned render query.
     * @example client.renders({ pageSize: 10, page: 3 });
     * @returns {Promise<Object>} The object containing the render list.
     */
    renders(params = {}) {
        if (params.nobots === false) delete params.nobots;
        return this.#request("GET", `renders?${new URLSearchParams(params)}`);
    }

    /**
     * Gets a list of skins. {@link https://ordr.issou.best/#/skins}
     * @param {Object} [params = {}] The query parameters.
     * @param {number} [params.pageSize = 100] The number of renders that the API will return.
     * @param {number} [params.page = 1] The page number.
     * @param {string} params.search The o!rdr skin to query.
     * @example client.skins({ pageSize: 10, page: 3 });
     * @returns {Promise<Object>} The object containing the skin list.
     */
    skins(params = {}) {
        params = new URLSearchParams(params);
        return this.#request("GET", `skins?${params.tostring()}`);
    }

    /**
     * Gets a list of servers. {@link https://ordr.issou.best/#/status}
     * @param {Object} params The query parameters.
     * @param {string} params.sort The sort type.
     * @example client.servers({ sort: "online" });
     * @returns {Promise<Object>} The object containing the server list.
     */
    servers(params = {}) {
        if (params.sort) {
            params[`sort${params.sort}`] = true;
            delete params.sort;
        }

        return this.#request("GET", `servers?${new URLSearchParams(params)}`);
    }
}

module.exports = { Client };
