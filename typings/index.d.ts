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
    on(event: "render_failed", listener: (data: { renderID: number; code: number; error: string }) => void): this;
    on(event: "render_error", listener: (data: { renderID: number }) => void): this;
    on(event: "render_progress", listener: (data: { renderID: number; status: string; progression: string | null }) => void): this;

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
     * @param {Boolean} [body.showHitCounter=false]
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
     * @param {String} body.devmode
     * @tutorial See the o!rdr Documentation: {@link https://ordr.issou.best/docs}
     * @example newRender({ replayURL: "https://url.tld/file.osr", username: "ordr.js", resolution: "1920x1080", ... })
     * @return {Promise<API.NewRender>}
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
        showHitCounter?: boolean;
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
        devmode: "success" | "fail" | "wsfail";
    }): Promise<API.NewRender>;

    /**
     * Get a list of renders.
     * @param {Object} params - query parameters
     * @param {Number} [params.pageSize=50] - number of renders that the API will return
     * @param {Number} [params.page=1] - page number
     * @param {String} params.ordrUsername - get renders that matches the most this o!rdr username
     * @param {String} params.replayUsername - get renders that matches the most this replay username
     * @param {Number} params.renderID - get a render with this specific renderID
     * @param {Boolean} params.nobots - hide bots from the returned render query
     * @example renders({ pageSize: 10, page: 3 })
     * @link https://ordr.issou.best/#/renders
     * @return {Promise<API.Renders>}
     */
    renders(params?: { pageSize?: number; page?: number; ordrUsername?: string; replayUsername?: string; renderID?: number }): Promise<API.Renders>;

    /**
     * Get a list of skins.
     * @param {Object} params - query parameters
     * @param {Number} [params.pageSize=100] - number of renders that the API will return
     * @param {Number} [params.page=1] - page number
     * @param {String} params.search - get the skins that matches the most this string
     * @example skins({ pageSize: 10, page: 3 })
     * @link https://ordr.issou.best/#/skins
     * @return {Promise<API.Skins>}
     */
    skins(params?: { pageSize?: number; page?: number; search?: string }): Promise<API.Skins>;
}

declare namespace API {
    interface NewRender {
        message: string;
        errorCode: number;
        renderID?: number;
    }

    interface Renders {
        renders: API.Render[] | [];
        maxRenders: number;
    }

    type Render = {
        date: string;
        readableDate: string;
        renderID: number;
        username: string;
        progress: string;
        errorCode: number;
        renderer: string;
        description: string;
        title: string;
        replayFilePath: string;
        videoUrl: string;
        mapLink: string;
        mapTitle: string;
        mapLength: number;
        replayDifficulty: string;
        replayUsername: string;
        replayMods: string;
        mapID: number;
        needToRedownload: boolean;
        resolution: string;
        globalVolume: number;
        musicVolume: number;
        hitsoundVolume: number;
        useSkinHitsounds: boolean;
        showHitErrorMeter: boolean;
        showUnstableRate: boolean;
        showScore: boolean;
        showHPBar: boolean;
        showComboCounter: boolean;
        showPPCounter: boolean;
        showKeyOverlay: boolean;
        showScoreboard: boolean;
        showBorders: boolean;
        showMods: boolean;
        showResultScreen: boolean;
        skin: string;
        hasCursorMiddle: boolean;
        useSkinCursor: boolean;
        useSkinColors: boolean;
        useBeatmapColors: boolean;
        cursorScaleToCS: boolean;
        cursorRainbow: boolean;
        cursorTrailGlow: boolean;
        cursorSize: number;
        cursorTrail: boolean;
        drawFollowPoints: boolean;
        drawComboNumbers: boolean;
        scaleToTheBeat: boolean;
        sliderMerge: boolean;
        objectsRainbow: boolean;
        objectsFlashToTheBeat: boolean;
        useHitCircleColor: boolean;
        seizureWarning: boolean;
        loadStoryboard: boolean;
        loadVideo: boolean;
        introBGDim: number;
        inGameBGDim: number;
        breakBGDim: number;
        BGParallax: boolean;
        showDanserLogo: boolean;
        motionBlur960fps: boolean;
        skip: boolean;
        cursorRipples: boolean;
        sliderSnakingIn: boolean;
        sliderSnakingOut: boolean;
        isVerified: boolean;
        isBot: boolean;
        renderStartTime: number;
        renderEndTime: number;
        renderTotalTime: number;
        uploadEndTime: number;
        uploadTotalTime: number;
        removed: boolean;
    };

    interface Skins {
        message: string;
        skins: API.Skin[] | [];
        maxSkins: number;
    }

    type Skin = {
        skin: string;
        presentationName: string;
        url: string;
        lowResPreview: string;
        highResPreview: string;
        mozaicPreview: string;
        id: number;
        hasCursorMiddle: boolean;
        gridPreview: string;
    };
}

export class WebSocket {
    constructor(gateway: string);

    gateway: string;

    start(): void;
}

export var WSstatus: {
    Waiting: string;
    "Uploading...": string;
    "Finalizing...": string;
};

export var WScodes: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    13: string;
    14: string;
    18: string;
    19: string;
    20: string;
    21: string;
    22: string;
};

export var APIcodes: {
    2: string;
    5: string;
    6: string;
    7: string;
    15: string;
    16: string;
    17: string;
    23: string;
};

export class BaseError extends Error {
    /**
     * @class BaseError
     * @constructor
     * @private
     * @param {String} type Error type
     * @param {String} message Error message
     */
    constructor();
    type: string;
    toJSON(): {
        type: string;
        message: string;
    };
}

export class FatalError extends BaseError {
    /**
     * Represents a fatal error from the Client : `"FatalError"`.
     * @extends BaseError
     * @constructor
     * @param {String|Error} error Error object or message
     */
    constructor(error: string | Error);
}

export class APIError extends BaseError {
    /**
     * Represents an error from the API : `"APIError"`.
     * @extends BaseError
     * @constructor
     * @param {String|Error} error Error message
     * @param {Object} response Error response
     * @param {String} status Status type of the request
     * @param {String} method Method used for the request
     * @param {String} url Url of the request to the endpoint
     */
    constructor(error: string | Error, response: any, status: string, method: string, url: string);
    status: string;
    method: string;
    url: string;
    result: string;
    code: number;
    error: string;
}

export class ParseError extends BaseError {
    /**
     * Represents a parsing error : `"ParseError"`.
     * @class ParseError
     * @constructor
     * @param {String} message Error message
     * @param {Object} response Error response
     * @param {String} status Status type of the request
     * @param {String} method Method used for the request
     * @param {String} url Url of the request to the endpoint
     */
    constructor(message: string, response: any, status: string, method: string, url: string);
    status: string;
    method: string;
    url: string;
    response: any;
}
