import type { InternalRender, Replay } from "../api/index.js";

export interface DiscordUserPreset {
    key: string;
    discord_id: string;
}

export interface RenderCreate extends Partial<InternalRender> {
    customSkin?: boolean;
    devmode?: "success" | "fail" | "wsfail";
    discordUserId?: string;
    replay: Replay;
    resolution: "720x480" | "960x540" | "1280x720"; // Required
    skin: string | number; // Required
    username: string; // Required
}

/**
 * @internal
 */
export interface InternalRenderCreate extends RenderCreate {
    replayFile: File;
    replayURL: string;
    verificationKey?: string;
}

export interface Renders {
    beatmapsetid?: number;
    link?: string;
    nobots?: unknown;
    ordrUsername?: string;
    page?: number;
    pageSize?: number;
    renderID?: number;
    replayUsername?: string;
}

export interface Servers {
    sort?: "online" | "totalvideos";
}

type ServerSortOption = `sort${string}`;

/**
 * @internal
 */
export type InternalServers = Record<ServerSortOption, boolean>;

export interface ServersOnlineCount {
    hasMotionBlur?: boolean;
    hasUhd?: boolean;
    usingOsuApi?: boolean;
}

export interface Skins {
    page?: number;
    pageSize?: number;
    search?: string;
}
