const axios = require('axios').default
const errors = require('./errors')
const querystring = require('querystring')
const EventEmitter = require('events')
const { WebSocket } = require("./websocket")

exports.Client = class Client extends EventEmitter {
    constructor(API_KEY) {
      super()

      /**
      * The API Bot Key
      * @type {String}
      */
      this.API_KEY = API_KEY

      /**
      * The base API Url
      * @type {String}
      */
      this.baseApiUrl = "https://ordr-api.issou.best"

      /**
      * The WebSocket Url
      * @type {String}
      */
      this.webSocketUrl = "wss://ordr-ws.issou.best/socket.io/?EIO=4&transport=websocket"
    }

    /**
    * Build url to the API
    * @param  {String} path API endpoint
    * @return {String} url
    * @private
    */
    #buildURL(path) {
      return `${this.baseApiUrl}/${path}`
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
        }
      }

      data ? options.data = data : null

      return axios(options)
      .then(response => {
        if (typeof(response.data) === "object") {
          return response.data
        } else {
          try {
            const data = JSON.parse(response.data)
            if (data.ok) {
              return data.result
            }
          } catch (err) {
            throw new errors.ParseError(`Error parsing response: ${response.data}`, response)
          }
        }
      })
      .catch(error => {
        throw new errors.APIError(error, error.response.status, options.method, options.url)
      })
    }



    //----- WS ------

    /**
    * Start the WebSocket.
    * @example start()
    */
    start() {
      const ws = new WebSocket(this.webSocketUrl)

      ws.start()

      ws.on("render_added", (data) => {
        this.emit("render_added", data)
      })

      ws.on("render_done", (data) => {
        this.emit("render_done", data)
      })

      ws.on("render_error", (data) => {
        this.emit("render_error", data)
      })

      ws.on("render_progress", (data) => {
        this.emit("render_progress", data)
      })
    }



    //----- WEB API ------

    /**
    * Create a new render on o!rdr.
    * @param {Object} body
    * @param {Boolean} body.BGParallax
    * @param {Number} body.breakBGDim
    * @param {Boolean} body.cursorRainbow
    * @param {Boolean} body.cursorRipples
    * @param {Boolean} body.cursorScaleToCS
    * @param {Number} body.cursorSize
    * @param {Boolean} body.cursorTrail
    * @param {Boolean} body.cursorTrailGlow
    * @param {Boolean} body.drawComboNumbers
    * @param {Boolean} body.drawFollowPoints
    * @param {Number} body.globalVolume
    * @param {Number} body.hitsoundVolume
    * @param {Number} body.inGameBGDim
    * @param {Number} body.introBGDim
    * @param {Boolean} body.loadStoryboard
    * @param {Boolean} body.loadVideo
    * @param {Boolean} body.motionBlur960fps
    * @param {Number} body.musicVolume
    * @param {Boolean} body.objectsFlashToTheBeat
    * @param {Boolean} body.objectsRainbow
    * @param {File} body.replayFile
    * @param {String} body.replayURL
    * @param {String} body.resolution
    * @param {Boolean} body.scaleToTheBeat
    * @param {Boolean} body.seizureWarning
    * @param {Boolean} body.showBorders
    * @param {Boolean} body.showComboCounter
    * @param {Boolean} body.showDanserLogo
    * @param {Boolean} body.showHPBar
    * @param {Boolean} body.showHitErrorMeter
    * @param {Boolean} body.showKeyOverlay
    * @param {Boolean} body.showMods
    * @param {Boolean} body.showPPCounter
    * @param {Boolean} body.showResultScreen
    * @param {Boolean} body.showScore
    * @param {Boolean} body.showScoreboard
    * @param {Boolean} body.showUnstableRate
    * @param {String} body.skin
    * @param {Boolean} body.skip
    * @param {Boolean} body.sliderMerge
    * @param {Boolean} body.sliderSnaking
    * @param {Boolean} body.useBeatmapColors
    * @param {Boolean} body.useHitCircleColor
    * @param {Boolean} body.useSkinColors
    * @param {Boolean} body.useSkinCursor
    * @param {String} body.username
    * @tutorial See the o!rdr Documentation: {@link https://ordr.issou.best/#/documentation}
    * @example newRender({ replayURL: "https://url.tld/file.osr", username: "ordr.js", resolution: "1920x1080", ... })
    * @return {Promise}
    */
    newRender(body = {}) {
      this.API_KEY ? body.verificationKey = this.API_KEY : null
      return this.#request("POST", "renders", body)
    }

    /**
    * Get a list of renders.
    * @param {Object} params - query parameters
    * @param {Number} [params.pageSize=50] - number of renders that the API will return
    * @param {Number} [params.page=1] - page number
    * @param {String} params.ordrUsername - get renders that matches the most this o!rdr username
    * @param {String} params.replayUsername - get renders that matches the most this replay username
    * @param {Number} params.renderID - get a render with this specific renderID
    * @example renders({ pageSize: 10, page: 3})
    * @link https://ordr.issou.best/#/renders
    * @return {Promise}
    */
    renders(params = {}) {
      params = querystring.stringify(params)
      console.log(params)
      return this.#request("GET", `renders?${params}`)
    }

    /**
    * Get a list of skins.
    * @param {Object} params - query parameters
    * @param {Number} [params.pageSize=50] - number of renders that the API will return
    * @param {Number} [params.page=1] - page number
    * @param {String} params.name - get skins that matches the most this name
    * @example skins({ pageSize: 10, page: 3})
    * @link https://ordr.issou.best/#/skins
    * @return {Promise}
    */
    skins(params = {}) {
      params = querystring.stringify(params)
      console.log(params)
      return this.#request("GET", `skins?${params}`)
    }

}
