import type { ErrorCodes } from "../../constants.js";

export interface RenderAdded {
    renderId: number;
}

export interface RenderDone {
    renderID: number;
    videoUrl: string;
}

type WebSocketErrorCode = keyof typeof ErrorCodes.ws;

export interface RenderFailed {
    renderId: number;
    errorCode: WebSocketErrorCode;
    errorMessage: (typeof ErrorCodes.ws)[WebSocketErrorCode];
}

export interface RenderProgress {
    renderId: number;
    username: string;
    progress: string;
    renderer: string;
    description: string;
}
