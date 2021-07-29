export class Client {
    constructor(API_KEY?: string);
    
    /**
    * The API Bot Key
    * @type {String}
    */
    API_KEY?: string;

    /**
    * The base API Url
    * @type {String}
    */
    baseApiUrl: string;

    /**
    * The WebSocket Url
    * @type {String}
    */
    webSocketUrl: string;

    /**
    * Start the WebSocket.
    * @example start()
    */
    start(): void;

    // Events
    on(event: "render_added", listener: (data: { renderID: number }) => void): this;
    on(event: "render_done", listener: (data: { renderID: number }) => void): this;
    on(event: "render_failed", listener: (data: { renderID: number, code: number, error: string }) => void): this;
    on(event: "render_error", listener: (data: { renderID: number }) => void): this;
    on(event: "render_progress", listener: (data: { renderID: number, status: string, progression: string | null }) => void): this;

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
    * @param {Boolean} body.motionBlur960fps
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
    * @param {Boolean} [body.showHitErrorMeter=true]
    * @param {Boolean} body.showKeyOverlay
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
    * @tutorial See the o!rdr Documentation: {@link https://ordr.issou.best/docs}
    * @example newRender({ replayURL: "https://url.tld/file.osr", username: "ordr.js", resolution: "1920x1080", ... })
    * @return {Promise<object>}
    */
    newRender(body?: {
        BGParallax?: boolean;
        breakBGDim?: number;
        cursorRainbow?: boolean;
        cursorRipples?: boolean;
        cursorScaleToCS?: boolean;
        cursorSize?: number;
        cursorTrail?: boolean;
        cursorTrailGlow?: boolean;
        drawComboNumbers?: boolean;
        drawFollowPoints?: boolean;
        globalVolume?: number;
        hitsoundVolume?: number;
        inGameBGDim?: number;
        introBGDim?: number;
        loadStoryboard?: boolean;
        loadVideo?: boolean;
        motionBlur960fps: boolean;
        musicVolume?: number;
        objectsFlashToTheBeat?: boolean;
        objectsRainbow?: boolean;
        replayFile: File;
        replayURL: string;
        resolution: string;
        scaleToTheBeat?: boolean;
        seizureWarning?: boolean;
        showBorders?: boolean;
        showComboCounter?: boolean;
        showDanserLogo?: boolean;
        showHPBar?: boolean;
        showHitErrorMeter?: boolean;
        showKeyOverlay: boolean;
        showMods?: boolean;
        showPPCounter?: boolean;
        showResultScreen?: boolean;
        showScore?: boolean;
        showScoreboard?: boolean;
        showUnstableRate?: boolean;
        skin: string;
        skip?: boolean;
        sliderMerge?: boolean;
        sliderSnakingIn?: boolean;
        sliderSnakingOut?: boolean;
        useBeatmapColors?: boolean;
        useHitCircleColor?: boolean;
        useSkinColors?: boolean;
        useSkinCursor?: boolean;
        useSkinHitsounds?: boolean;
        username: string;
    }): Promise<object>;

    /**
    * Get a list of renders.
    * @param {Object} params - query parameters
    * @param {Number} [params.pageSize=50] - number of renders that the API will return
    * @param {Number} [params.page=1] - page number
    * @param {String} params.ordrUsername - get renders that matches the most this o!rdr username
    * @param {String} params.replayUsername - get renders that matches the most this replay username
    * @param {Number} params.renderID - get a render with this specific renderID
    * @example renders({ pageSize: 10, page: 3 })
    * @link https://ordr.issou.best/#/renders
    * @return {Promise<Object>}
    */
    renders(params?: {
        pageSize?: number;
        page?: number;
        ordrUsername: string;
        replayUsername: string;
        renderID: number;
    }): Promise<object>;

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
    skins(params?: {
        pageSize?: number;
        page?: number;
        search: string;
    }): Promise<object>;
}
