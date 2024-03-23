import type * as EventsData from "./events.js";

export * as EventsData from "./events.js";

/**
 * @internal
 */
export enum InternalWebSocketEvents {
    Connect = "connect",
    Disconnect = "disconnect",
    RenderAdded = "render_added_json",
    RenderDone = "render_done_json",
    RenderFailed = "render_failed_json",
    RenderProgress = "render_progress_json",
}

export enum WebSocketEvents {
    /**
     * Emitted when the client is connected.
     */
    Connected = "connected",

    /**
     * Emitted when a render is added.
     */
    RenderAdded = "render_added",

    /**
     * Emitted when a render is done.
     */
    RenderDone = "render_done",

    /**
     * Emitted when a render failed.
     */
    RenderFailed = "render_failed",

    /**
     * Emitted when a render progress is updated.
     */
    RenderProgress = "render_progress",
}

export interface WebSocketEventsMap {
    [WebSocketEvents.Connected]: never[];
    [WebSocketEvents.RenderAdded]: [EventsData.RenderAdded];
    [WebSocketEvents.RenderDone]: [EventsData.RenderDone];
    [WebSocketEvents.RenderFailed]: [EventsData.RenderFailed];
    [WebSocketEvents.RenderProgress]: [EventsData.RenderProgress];
}
