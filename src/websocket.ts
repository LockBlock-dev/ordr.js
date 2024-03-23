import { io } from "socket.io-client";
import type { Client } from "./client.js";
import {
    InternalWebSocketEvents,
    WebSocketEvents,
    type EventsData,
} from "./types/ws/index.js";
import { DefaultClientOptions } from "./constants.js";

/**
 * The o!rdr.js WebSocket handler for the client.
 */
export default class WebSocket {
    // eslint-disable-next-line @typescript-eslint/parameter-properties
    private readonly client: Client;
    private ws?: ReturnType<typeof io>;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Connect to o!rdr websocket.
     */
    connect(): void {
        if (this.ws) return;

        this.ws = io(DefaultClientOptions.ws.url, {
            path: DefaultClientOptions.ws.path,
        });

        this.attachEvents();
    }

    /**
     * Attaches event handlers.
     */
    private attachEvents(): void {
        if (!this.ws) throw new Error("WebSocket handler was not initialized!");

        this.ws
            .on(InternalWebSocketEvents.Connect, () => {
                this.client.emit(WebSocketEvents.Connected);
            })

            .on(InternalWebSocketEvents.Disconnect, (reason: string) => {
                if (reason === "io server disconnect") {
                    // The disconnection was initiated by the server, we need to reconnect manually
                    this.ws!.connect();
                }
                // Else the socket will automatically try to reconnect
            })

            .on(
                InternalWebSocketEvents.RenderAdded,
                (data: EventsData.RenderAdded) =>
                    this.client.emit(WebSocketEvents.RenderAdded, data)
            )

            .on(
                InternalWebSocketEvents.RenderDone,
                (data: EventsData.RenderDone) =>
                    this.client.emit(WebSocketEvents.RenderDone, data)
            )

            .on(
                InternalWebSocketEvents.RenderFailed,
                (data: EventsData.RenderFailed) =>
                    this.client.emit(WebSocketEvents.RenderFailed, data)
            )

            .on(
                InternalWebSocketEvents.RenderProgress,
                (data: EventsData.RenderProgress) =>
                    this.client.emit(WebSocketEvents.RenderProgress, data)
            );
    }
}
