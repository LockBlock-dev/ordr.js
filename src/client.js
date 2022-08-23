const axios = require("axios").default;
const errors = require("./errors");
const { APIcodes, WScodes } = require("./constants");
const pkg = require("../package.json");
const io = require("socket.io-client");
const EventEmitter = require("events");

exports.Client = class Client extends EventEmitter {
    /**
     * The o!rdr client
     * @param {string} [API_KEY] o!rdr API key
     * @example const client = new Client("API_KEY");
     */
    constructor(API_KEY) {
        super();

        /**
         * The API Bot Key
         * @type {string}
         */
        this.API_KEY = API_KEY;

        /**
         * The base API URL
         * @type {string}
         */
        this.API_URL = "https://apis.issou.best/ordr";

        /**
         * The WebSocket URL
         * @type {string}
         */
        this.WEBSOCKET_URL = "wss://ordr-ws.issou.best";

        /**
         * API error codes
         * @type {string}
         */
        this.API_CODES = APIcodes;

        /**
         * WebSocket error codes
         * @type {string}
         */
        this.WS_CODES = WScodes;
    }

    /**
     * Make request against the API
     * @private
     * @param {string} method HTTP method
     * @param  {string} path API endpoint
     * @param  {Object} [data] request data
     * @return {Promise<Object>} promise
     */
    #request(method, path, data) {
        let options = {
            method,
            url: `${this.API_URL}/${path}`,
            headers: {
                "User-Agent": `ordr.js ${pkg.version} (https://github.com/LockBlock-dev/ordr.js)`,
                "Content-Type": "application/json",
                "Accept-Encoding": "UTF8",
            },
        };

        if (data) options.data = data;

        return axios(options)
            .then((response) => {
                if (typeof response.data === "object") {
                    return response.data;
                } else {
                    try {
                        let data = JSON.parse(response.data);

                        if (data.errorCode) {
                            data.code = data.errorCode;
                            data.error = APIcodes[data.errorCode];
                            delete data.errorCode;
                        }

                        return data;
                    } catch (err) {
                        throw new errors.ParseError(
                            response.data,
                            response.status,
                            options.method,
                            options.url
                        );
                    }
                }
            })
            .catch((error) => {
                throw error.type === "ParseError"
                    ? error
                    : new errors.APIError(
                          error,
                          error.response,
                          error.response.status,
                          options.method,
                          options.url
                      );
            });
    }

    //----- WS ------

    /**
     * Start the WebSocket.
     * @example client.start();
     */
    start() {
        const socket = io(this.WEBSOCKET_URL)
            .on("connect", () => {
                // console.log(socket.id)
            })

            .on("disconnect", (reason) => {
                if (reason === "io server disconnect") {
                    // the disconnection was initiated by the server, you need to reconnect manually
                    socket.connect();
                }
                // else the socket will automatically try to reconnect
            })

            .on("render_added_json", (data) => {
                /**
                 * Emitted when a render is added.
                 * @event Client#render_added
                 * @type {Object}
                 * @property {number} renderID render ID
                 */
                this.emit("render_added", data);
            })

            .on("render_progress_json", (data) => {
                /**
                 * Emitted when a render has progressed.
                 * @event Client#render_progress
                 * @type {Object}
                 * @property {number} renderID render ID
                 * @property {string} username render submitter username
                 * @property {string} progress render progress
                 * @property {string} renderer render renderer
                 * @property {string} description render description
                 */
                this.emit("render_progress", data);
            })

            .on("render_failed_json", (data) => {
                /**
                 * Emitted when a render has failed rendering.
                 * @event Client#render_failed
                 * @type {Object}
                 * @property {number} renderID render ID
                 * @property {number} errorCode error code
                 * @property {string} errorMessage error message
                 */
                this.emit("render_failed", data);
            })

            .on("render_done_json", (data) => {
                /**
                 * Emitted when a render has done rendering.
                 * @event Client#render_done
                 * @type {pbject}
                 * @property {number} renderID render ID
                 * @property {string} videoUrl render video URL
                 */
                this.emit("render_done", data);
            });
    }

    //----- WEB API ------

    /**
     * Create a new render on o!rdr.
     * @param {Object} [body = {}]
     * @param {boolean} [body.BGParallax = false]
     * @param {number} [body.breakBGDim = 30]
     * @param {boolean} [body.cursorRainbow = false]
     * @param {boolean} [body.cursorRipples = false]
     * @param {boolean} [body.cursorScaleToCS = false]
     * @param {number} [body.cursorSize = 1]
     * @param {boolean} [body.cursorTrail = true]
     * @param {boolean} [body.cursorTrailGlow = false]
     * @param {boolean} [body.customSkin = false]
     * @param {boolean} [body.drawComboNumbers = true]
     * @param {boolean} [body.drawFollowPoints = true]
     * @param {number} [body.globalVolume = 50]
     * @param {number} [body.hitsoundVolume = 50]
     * @param {number} [body.inGameBGDim = 75]
     * @param {number} [body.introBGDim = 0]
     * @param {boolean} [body.loadStoryboard = true]
     * @param {boolean} [body.loadVideo = true]
     * @param {number} [body.musicVolume = 50]
     * @param {boolean} [body.objectsFlashToTheBeat = false]
     * @param {boolean} [body.objectsRainbow = false]
     * @param {boolean} [body.playNightcoreSamples = true]
     * @param {Buffer} body.replayFile
     * @param {string} body.replayURL
     * @param {string} body.resolution
     * @param {boolean} [body.scaleToTheBeat = false]
     * @param {boolean} [body.seizureWarning = false]
     * @param {boolean} [body.showAimErrorMeter = false]
     * @param {boolean} [body.showAvatarsOnScoreboard = false]
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
     * @return {Promise<Object>}
     */
    newRender(body = {}) {
        if (this.API_KEY) body.verificationKey = this.API_KEY;

        if (body.devmode) {
            body.verificationKey = `devmode_${body.devmode}`;
            delete body.devmode;
        }

        delete body?.motionBlur960fps;

        return this.#request("POST", "renders", body);
    }

    /**
     * Get a list of renders. {@link https://ordr.issou.best/#/renders}
     * @param {Object} [params = {}] - query parameters
     * @param {number} [params.pageSize = 50] - number of renders that the API will return
     * @param {number} [params.page = 1] - page number
     * @param {string} params.ordrUsername - get renders that matches the most this o!rdr username
     * @param {string} params.replayUsername - get renders that matches the most this replay username
     * @param {number} params.renderID - get a render with this specific renderID
     * @param {boolean} [params.nobots = false] - hide bots from the returned render query
     * @param {boolean} [params.lite = false] - lite mode gives less info
     * @param {string} params.link - path of a shortlink (example pov8n for https://link.issou.best/pov8n)
     * @param {number} params.beatmapsetid - renders with this specific beatmapset ID
     * @example client.renders({ pageSize: 10, page: 3 });
     * @return {Promise<Object>}
     */
    renders(params = {}) {
        if (params.nobots === false) delete params.nobots;

        if (params.lite) {
            delete params.lite;
            return this.#request("GET", `rendersweb?${new URLSearchParams(params)}`);
        } else return this.#request("GET", `renders?${new URLSearchParams(params)}`);
    }

    /**
     * Get a list of skins. {@link https://ordr.issou.best/#/skins}
     * @param {Object} [params = {}] - query parameters
     * @param {number} [params.pageSize = 100] - number of renders that the API will return
     * @param {number} [params.page = 1] - page number
     * @param {string} params.search - skin to query
     * @example client.skins({ pageSize: 10, page: 3 });
     * @return {Promise<Object>}
     */
    skins(params = {}) {
        return this.#request("GET", `skins?${new URLSearchParams(params)}`);
    }

    /**
     * Get a list of servers. {@link https://ordr.issou.best/#/status}
     * @param {Object} [params = {}] - query parameters
     * @param {string} params.sort - sorting option: online, totalvideos
     * @example client.servers({ sort: "online" });
     * @return {Promise<Object>}
     */
    servers(params = {}) {
        if (params.sort) {
            params[`sort${params.sort}`] = true;
            delete params.sort;
        }

        return this.#request("GET", `servers?${new URLSearchParams(params)}`);
    }

    /**
     * Get the count of online servers.
     * @param {Object} [params = {}] - query parameters
     * @param {boolean} [params.hasMotionBlur = false] - filter servers that have motion blur enabled
     * @param {boolean} [params.hasUhd = false] - filter servers that have 4K enabled
     * @param {boolean} [params.usingOsuApi = false] - filter servers that have an Osu! API key
     * @example client.onlineCount({ hasMotionBlur: true });
     * @return {Promise<Object>}
     */
    onlineCount(params = {}) {
        return this.#request(
            "GET",
            `servers/onlinecount?${new URLSearchParams(params)}`.toLowerCase()
        );
    }

    /**
     * Get a custom skin info. {@link https://ordr.issou.best/#/skins}
     * @param {number} id - custom skin ID
     * @example client.customSkinInfo(1);
     * @return {Promise<Object>}
     */
    customSkinInfo(id) {
        return this.#request("GET", `skins/custom?id=${id}`);
    }
};
