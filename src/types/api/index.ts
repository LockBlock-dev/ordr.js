import type { ReadStream } from "node:fs";
import type { ErrorCodes } from "../../constants.js";

export * as Operations from "./operations.js";

/**
 * @internal
 */
export interface ApiErrorRequest {
    method: string;
    status: number;
    statusText: string;
    url: string;
}

export type Replay = Uint8Array | ReadStream | string;

export interface CustomSkin {
    downloadLink: string;
    found: boolean;
    message: string;
    removed: boolean;
    skinAuthor: string;
    skinName: string;
}

export interface DynamicLink {
    url: string;
}

export interface InfoCost {
    cost: number;
    name: string;
    sCost: string;
}

export interface Info {
    buildDate: string;
    buildNumber: string;
    gbsStored: number;
    lastHourRenders: number;
    lmd: number;
    motd: string;
    serviceCosts: InfoCost[];
    serviceGoals: InfoCost[];
    tbsStored: number;
}

export interface RenderCreate {
    errorCode: keyof typeof ErrorCodes.api;
    message: string;
    reason?: string;
    renderID?: number;
}

/**
 * @internal
 */
export interface InternalRender {
    BGParallax: boolean;
    breakBGDim: number;
    cursorRainbow: boolean;
    cursorRipples: boolean;
    cursorScaleToCS: boolean;
    cursorSize: number;
    cursorTrail: boolean;
    cursorTrailGlow: boolean;
    drawComboNumbers: boolean;
    drawFollowPoints: boolean;
    globalVolume: number;
    hitsoundVolume: number;
    ignoreFail: boolean;
    inGameBGDim: number;
    introBGDim: number;
    loadStoryboard: boolean;
    loadVideo: boolean;
    musicVolume: number;
    objectsFlashToTheBeat: boolean;
    objectsRainbow: boolean;
    playNightcoreSamples: boolean;
    resolution: "720x480" | "960x540" | "1280x720" | "1920x1080" | "3840x2160";
    scaleToTheBeat: boolean;
    seizureWarning: boolean;
    showAimErrorMeter: boolean;
    showAvatarsOnScoreboard: boolean;
    showBorders: boolean;
    showComboCounter: boolean;
    showDanserLogo: boolean;
    showHPBar: boolean;
    showHitCounter: boolean;
    showHitErrorMeter: boolean;
    showKeyOverlay: boolean;
    showMods: boolean;
    showPPCounter: boolean;
    showResultScreen: boolean;
    showScore: boolean;
    showScoreboard: boolean;
    showSliderBreaks: boolean;
    showStrainGraph: boolean;
    showUnstableRate: boolean;
    skip: boolean;
    sliderMerge: boolean;
    sliderSnakingIn: boolean;
    sliderSnakingOut: boolean;
    useBeatmapColors: boolean;
    useHitCircleColor: boolean;
    useSkinColors: boolean;
    useSkinCursor: boolean;
    useSkinHitsounds: boolean;
    username: string;
}

export interface Render extends InternalRender {
    date: string;
    description: string;
    hasCursorMiddle: boolean;
    isBot: boolean;
    isVerified: boolean;
    mapID: number;
    mapLength: number;
    mapLink: string;
    mapTitle: string;
    motionBlur960fps: boolean;
    needToRedownload: boolean;
    progress: string;
    readableDate: string;
    removed: boolean;
    renderer: string;
    renderEndTime: number;
    renderID: number;
    renderStartTime: number;
    renderTotalTime: number;
    replayDifficulty: string;
    replayFilePath: string;
    replayMods: string;
    replayUsername: string;
    skin: string;
    title: string;
    uploadEndTime: number;
    uploadTotalTime: number;
    videoUrl: string;
}

export interface Renders {
    maxRenders: number;
    renders: Render[];
}

export interface Server {
    enabled: boolean;
    lastSeen: string;
    name: string;
    priority: number;
    avgFPS: number;
    power: "ONLINE" | "OFFLINE";
    status: "Idle" | "Working" | "Errored! Waiting for a restart.";
    totalRendered: number;
    renderingType: "cpu" | "gpu";
    cpu: string;
    gpu: string;
    motionBlurCapable: boolean;
    usingOsuApi: boolean;
    uhdCapable: boolean;
    avgRenderTime: number;
    avgUploadTime: number;
    totalAvgTime: number;
    totalUploadedVideosSize: number;
    customization: {
        textColor: "default" | Uppercase<string>;
        backgroundType: number;
    };
    ownerUserId: number;
    ownerUsername: string;
    lastScoreReset: string;
}

export interface Servers {
    servers: Server[];
}

export interface ServerLeaderboard {
    active: boolean;
    createdOn: string;
    lastSeen: string;
    name: string;
    totalRendered: number;
    totalSize: number;
}

export type ServersLeaderboard = ServerLeaderboard[];

export type ServersOnlineCount = number;

export interface Skin {
    author: string;
    gridPreview: string;
    hasCursorMiddle: boolean;
    highResPreview: string;
    id: number;
    lowResPreview: string;
    modified: boolean;
    presentationName: string;
    skin: string;
    timesUsed: number;
    url: string;
    version: string;
}

export interface Skins {
    maxSkins: number;
    message: string;
    skins: Skin[];
}
