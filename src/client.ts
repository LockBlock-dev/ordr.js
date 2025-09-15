import { EventEmitter } from "node:events";
import { doRequest, makeUrlSearchParams } from "./utils.js";
import { ApiError } from "./errors.js";
import WebSocket from "./websocket.js";
import {
    HttpMethod,
    type RequestBody,
    type RequestOptions,
} from "./types/http.js";
import type * as API from "./types/api/index.js";
import type { WebSocketEventsMap } from "./types/ws/index.js";

/**
 * Available client events.
 */
export { WebSocketEvents as Events } from "./types/ws/index.js";

/**
 * The main client for interacting with the o!rdr API.
 */
export class Client {
    private readonly emitter: EventEmitter;
    private readonly key?: string;
    private readonly ws: WebSocket;

    /**
     * @param key - The o!rdr API key
     */
    constructor(key?: string) {
        this.emitter = new EventEmitter();

        this.key = key;

        this.ws = new WebSocket(this);
    }

    /**
     * Emit an event.
     *
     * @param event - The event name
     * @param args - The arguments to emit
     * @returns true if the event had listeners, false otherwise
     */
    emit<EventName extends keyof WebSocketEventsMap>(
        event: EventName,
        ...args: WebSocketEventsMap[EventName]
    ): boolean {
        return this.emitter.emit(event, ...args);
    }

    /**
     * Listen for an event.
     *
     * @param event - The event name
     * @param handler - The handling function
     * @returns The client instance
     */
    on<EventName extends keyof WebSocketEventsMap>(
        event: EventName,
        handler: (...args: WebSocketEventsMap[EventName]) => void
    ): this {
        this.emitter.on(event, handler as (...args: any[]) => void);
        return this;
    }

    /**
     * Connect and setup the o!rdr websocket.
     */
    start(): void {
        this.ws.connect();
    }

    /**
     * List of available skins.
     *
     * @see {@link https://ordr.issou.best/docs/#operation/1}
     *
     * @param params.page - The page number
     * @param params.pageSize - The number of skins the API will return in the page
     * @param params.search - The query to search for
     * @returns The list of skins
     */
    async getSkins(params: API.Operations.Skins = {}): Promise<API.Skins> {
        return this.request({
            method: HttpMethod.GET,
            path: "/skins",
            service: "ordr",
            query: makeUrlSearchParams(params),
        });
    }

    /**
     * List of rendered replays.
     *
     * @see {@link https://ordr.issou.best/docs/#operation/2}
     *
     * @param params.beatmapsetid - The beatmapset ID to search for
     * @param params.link - The path of a shortlink (example `pov8n` for https://link.issou.best/pov8n)
     * @param params.nobots - Exclude bots renders if true
     * @param params.ordrUsername - The o!rdr username to search for
     * @param params.page - The page number
     * @param params.pageSize - The number of skins the API will return in the page
     * @param params.renderID - The render id to search for
     * @param params.replayUsername - The osu username to search for
     * @returns The list of renders.
     */
    async getRenders(
        params: API.Operations.Renders = {}
    ): Promise<API.Renders> {
        if (!params.nobots) delete params.nobots;

        return this.request({
            method: HttpMethod.GET,
            path: "/renders",
            service: "ordr",
            query: makeUrlSearchParams(params),
        });
    }

    /**
     * Send a new render.
     *
     * @see {@link https://ordr.issou.best/docs/#operation/3}
     *
     * @param body - The render info
     * @returns The render submission status
     */
    async sendRender(
        body: API.Operations.RenderCreate
    ): Promise<API.RenderCreate> {
        const { devmode, replay, ...finalBody } =
            body as API.Operations.InternalRenderCreate;

        if (this.key) finalBody.verificationKey = this.key;

        if (devmode) finalBody.verificationKey = `devmode_${devmode}`;

        const files: API.Replay[] = [];

        if (typeof replay === "string" && /^http(s+)?:\/\//.test(replay)) {
            try {
                // Throws TypeError if replay is not a valid url
                const _ = new URL(replay);

                finalBody.replayURL = replay;
            } catch {}
        } else {
            files.push(replay);
        }

        return this.request({
            method: HttpMethod.POST,
            path: "/renders",
            service: "ordr",
            body: finalBody as unknown as RequestBody, // Love TypeScript
            files,
        });
    }

    /**
     * Get a custom skin info.
     *
     * @see {@link https://ordr.issou.best/docs/#operation/4}
     *
     * @param id - The custom skin id
     * @returns The custom skin
     */
    async getCustomSkin(id: number): Promise<API.CustomSkin> {
        return this.request({
            method: HttpMethod.GET,
            path: "/skins/custom",
            service: "ordr",
            query: makeUrlSearchParams({ id }),
        });
    }

    /**
     * Retrieve a user's preset using their Discord user ID.
     *
     * @see {@link https://ordr.issou.best/docs/#/paths/~1ordr~1presets~1bot/get}
     *
     * @param params.key - Your verified bot key
     * @param params.discord_id - The Discord user ID of the preset owner
     * @returns The user's preset
     */
    async getDiscordUserPreset(
        params: API.Operations.DiscordUserPreset
    ): Promise<API.Preset> {
        return this.request({
            method: HttpMethod.GET,
            path: "/presets/bot",
            service: "ordr",
            query: makeUrlSearchParams(params),
        });
    }

    /**
     * Generate a temporary video download link for the specified render.
     *
     * @see {@link https://ordr.issou.best/docs/#operation/5}
     *
     * @param id - The render id
     * @returns The download link
     */
    async generateDownloadLink(id: number): Promise<API.DynamicLink> {
        return this.request({
            method: HttpMethod.GET,
            path: "/ordr/gen",
            service: "dynlink",
            query: makeUrlSearchParams({ id }),
        });
    }

    /**
     * Get o!rdr info. - UNOFFICIAL
     *
     * @returns The o!rdr service info
     */
    async getInfo(): Promise<API.Info> {
        return this.request({
            method: HttpMethod.GET,
            path: "/info",
            service: "ordr",
        });
    }

    /**
     * List of servers. - UNOFFICIAL
     *
     * @param {string} params.sort - The sorting parameter, sorted by score by default
     * @returns The servers list
     */
    async getServers(
        params: API.Operations.Servers = {}
    ): Promise<API.Servers> {
        const finalParams: API.Operations.InternalServers = {};

        if (params.sort) finalParams[`sort${params.sort}`] = true;

        return this.request({
            method: HttpMethod.GET,
            path: "/servers",
            service: "ordr",
            query: makeUrlSearchParams(finalParams),
        });
    }

    /**
     * Servers leaderboard. - UNOFFICIAL
     *
     * @returns The servers leaderboard
     */
    async getServersLeaderboard(): Promise<API.ServersLeaderboard> {
        return this.request({
            method: HttpMethod.GET,
            path: "/servers/leaderboard",
            service: "ordr",
        });
    }

    /**
     * Online servers count. - UNOFFICIAL
     *
     * @param params.hasMotionBlur - Filter by servers with motion blur enabled
     * @param params.hasUhd - Filter by servers with 4K enabled
     * @param params.usingOsuApi - Filter by servers with an osu! API key
     * @returns The online servers count
     */
    async getOnlineServersCount(
        params: API.Operations.ServersOnlineCount = {}
    ): Promise<API.ServersOnlineCount> {
        const query = makeUrlSearchParams(params);

        for (const [key, value] of query.entries()) {
            query.delete(key);
            query.set(key.toLowerCase(), value);
        }

        return this.request({
            method: HttpMethod.GET,
            path: "/servers/onlinecount",
            service: "ordr",
            query,
        });
    }

    private async request<T>(options: RequestOptions): Promise<T> {
        const { service, ...finalOptions } = options;

        finalOptions.path = `/${service}${finalOptions.path}`;

        const response = await doRequest(finalOptions);

        let data: any;

        try {
            data = await response.json();
        } catch {
            throw new ApiError(
                {
                    method: finalOptions.method,
                    status: response.status,
                    statusText: response.statusText,
                    url: response.url,
                },
                "API response is not valid JSON!"
            );
        }

        if (!response.ok)
            throw new ApiError(
                {
                    method: finalOptions.method,
                    status: response.status,
                    statusText: response.statusText,
                    url: response.url,
                },
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                data?.message,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                data?.errorCode,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                data?.reason
            );

        return data as T;
    }
}
