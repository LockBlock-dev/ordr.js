const axios = require("axios").default;
const errors = require("./errors");
const { APIcodes } = require("./constants");
const EventEmitter = require("events");
const { WebSocket } = require("./websocket");

exports.Client = class Client extends EventEmitter {
    constructor(API_KEY) {
        super();

        /**
         * The API Bot Key
         * @type {String}
         */
        this.API_KEY = API_KEY;

        /**
         * The base API Url
         * @type {String}
         */
        this.baseApiUrl = "https://ordr-api.issou.best";

        /**
         * The WebSocket Url
         * @type {String}
         */
        this.webSocketUrl = "wss://ordr-ws.issou.best";
    }

    /**
     * Build url to the API
     * @param  {String} path API endpoint
     * @return {String} url
     * @private
     */
    #buildURL(path) {
        return `${this.baseApiUrl}/${path}`;
    }

    /**
     * Make request against the API
     * @param  {String} path API endpoint
     * @param  {Object} [options] request options
     * @return {Promise} promise
     * @private
     */
    #request(method, path, data) {
        var options = {
            method: method,
            url: this.#buildURL(path),
            headers: {
                "User-Agent": `ordr.js ${require("../package.json").version} (https://github.com/LockBlock-dev/ordr.js)`,
                "Content-Type": "application/json",
                "Accept-Encoding": "UTF8",
            },
        };

        data ? (options.data = data) : null;

        return axios(options)
            .then((response) => {
                if (typeof response.data === "object") {
                    return response.data;
                } else {
                    try {
                        var data = JSON.parse(response.data);
                        data.errorCode ? ((data.code = data.errorCode), (data.error = APIcodes[data.errorCode]), delete data.errorCode) : null;
                        return data;
                    } catch (err) {
                        throw new errors.ParseError(response.data, response.status, options.method, options.url);
                    }
                }
            })
            .catch((error) => {
                if (error.type == "ParseError") {
                    return error;
                } else {
                    return new errors.APIError(error, error.response, error.response.status, options.method, options.url);
                }
            });
    }

    //----- WS ------

    /**
     * Start the WebSocket.
     * @example start()
     */
    start() {
        const ws = new WebSocket(this.webSocketUrl);

        ws.on("render_added", (data) => {
            this.emit("render_added", data);
        });

        ws.on("render_done", (data) => {
            this.emit("render_done", data);
        });

        ws.on("render_failed", (data) => {
            this.emit("render_failed", data);
        });

        ws.on("render_error", (data) => {
            this.emit("render_error", data);

            if (this.emit("render_error", data) && !deprecationEmitted) {
                deprecationEmitted = true;
                process.emitWarning("The render_error event is deprecated. Use render_failed instead", "DeprecationWarning");
            }
        });

        ws.on("render_progress", (data) => {
            this.emit("render_progress", data);
        });

        ws.start();
    }

    //----- WEB API ------

    /**
     * Create a new render on o!rdr.
     * @param {Object} body
     * @param {Boolean} [body.BGParallax=false]
     * @param {Number} [body.breakBGDim=30]
     * @param {Boolean} [body.cursorRainbow=false]
     * @param {Boolean} [body.cursorRipples=false]
     * @param {Boolean} [body.cursorScaleToCS=false]
     * @param {Number} [body.cursorSize=1]
     * @param {Boolean} [body.cursorTrail=true]
     * @param {Boolean} [body.cursorTrailGlow=false]
     * @param {Boolean} [body.drawComboNumbers=true]
     * @param {Boolean} [body.drawFollowPoints=true]
     * @param {Number} [body.globalVolume=50]
     * @param {Number} [body.hitsoundVolume=50]
     * @param {Number} [body.inGameBGDim=75]
     * @param {Number} [body.introBGDim=0]
     * @param {Boolean} [body.loadStoryboard=true]
     * @param {Boolean} [body.loadVideo=true]
     * @param {Number} [body.musicVolume=50]
     * @param {Boolean} [body.objectsFlashToTheBeat=false]
     * @param {Boolean} [body.objectsRainbow=false]
     * @param {File} body.replayFile
     * @param {String} body.replayURL
     * @param {String} body.resolution
     * @param {Boolean} [body.scaleToTheBeat=false]
     * @param {Boolean} [body.seizureWarning=false]
     * @param {Boolean} [body.showBorders=false]
     * @param {Boolean} [body.showComboCounter=true]
     * @param {Boolean} [body.showDanserLogo=true]
     * @param {Boolean} [body.showHPBar=true]
     * @param {Boolean} [body.showHitCounter=false]
     * @param {Boolean} [body.showHitErrorMeter=true]
     * @param {Boolean} [body.showKeyOverlay=true]
     * @param {Boolean} [body.showMods=true]
     * @param {Boolean} [body.showPPCounter=true]
     * @param {Boolean} [body.showResultScreen=true]
     * @param {Boolean} [body.showScore=true]
     * @param {Boolean} [body.showScoreboard=false]
     * @param {Boolean} [body.showUnstableRate=true]
     * @param {String} body.skin
     * @param {Boolean} [body.skip=true]
     * @param {Boolean} [body.sliderMerge=false]
     * @param {Boolean} [body.sliderSnakingIn=true]
     * @param {Boolean} [body.sliderSnakingOut=true]
     * @param {Boolean} [body.useBeatmapColors=true]
     * @param {Boolean} [body.useHitCircleColor=true]
     * @param {Boolean} [body.useSkinColors=false]
     * @param {Boolean} [body.useSkinCursor=true]
     * @param {Boolean} [body.useSkinHitsounds=true]
     * @param {String} body.username
     * @param {String} body.devmode
     * @tutorial See the o!rdr Documentation: {@link https://ordr.issou.best/docs}
     * @example newRender({ replayURL: "https://url.tld/file.osr", username: "ordr.js", resolution: "1920x1080", ... })
     * @return {Promise<Object>}
     */
    newRender(body = {}) {
        this.API_KEY ? (body.verificationKey = this.API_KEY) : null;
        body.devmode ? ((body.verificationKey = `devmode_${body.devmode}`), delete body.devmode) : null;
        delete body?.motionBlur960fps;
        return this.#request("POST", "renders", body);
    }

    /**
     * Get a list of renders.
     * @param {Object} params - query parameters
     * @param {Number} [params.pageSize=50] - number of renders that the API will return
     * @param {Number} [params.page=1] - page number
     * @param {String} params.ordrUsername - get renders that matches the most this o!rdr username
     * @param {String} params.replayUsername - get renders that matches the most this replay username
     * @param {Number} params.renderID - get a render with this specific renderID
     * @param {Boolean} [params.nobots=false] - hide bots from the returned render query
     * @example renders({ pageSize: 10, page: 3 })
     * @link https://ordr.issou.best/#/renders
     * @return {Promise<Object>}
     */
    renders(params = {}) {
        params.nobots == false ? delete params.nobots : null;
        params = new URLSearchParams(params);
        return this.#request("GET", `renders?${params.toString()}`);
    }

    /**
     * Get a list of skins.
     * @param {Object} params - query parameters
     * @param {Number} [params.pageSize=100] - number of renders that the API will return
     * @param {Number} [params.page=1] - page number
     * @param {String} params.search - get the skins that matches the most this string
     * @example skins({ pageSize: 10, page: 3 })
     * @link https://ordr.issou.best/#/skins
     * @return {Promise<Object>}
     */
    skins(params = {}) {
        params = new URLSearchParams(params);
        return this.#request("GET", `skins?${params.toString()}`);
    }

    /**
     * Get a list of servers.
     * @param {Object} params - query parameters
     * @param {String} params.sort
     * @example servers({ sort: "online" })
     * @link https://ordr.issou.best/#/status
     * @return {Promise<Object>}
     */
    servers(params = {}) {
        params.sort ? ((params[`sort${params.sort}`] = true), delete params.sort) : null;
        params = new URLSearchParams(params);
        return this.#request("GET", `servers?${params.toString()}`);
    }
};
