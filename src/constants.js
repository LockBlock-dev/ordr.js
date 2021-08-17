module.exports.WSstatus = {
    "Waiting": "(0%)",
    "Uploading...": "(100%)",
    "Finalizing...": "(100%)",
};

module.exports.WScodes = {
    1: "Emergency stop (triggered manually)",
    2: "Replay parsing error (bad upload from the sender)",
    3: "Replay parsing error (bad download from the server), can happen because of invalid characters",
    4: "All beatmap mirrors are unavailable",
    5: "Replay file corrupted (cannot parse)",
    6: "Invalid osu! gamemode (not 0 = std)",
    7: "The replay has no input data",
    8: "Beatmap does not exist on osu! (probably because of custom difficulty or non-submitted map)",
    9: "Audio for the map is unavailable (because of copyright claim)",
    10: "Cannot connect to osu! api",
    11: "The replay has the autoplay mod",
    12: "The replay username has invalid characters",
    13: "The beatmap is longer than 15 minutes",
    14: "Beatmap not found on all the beatmap mirrors",
    18: "Unknown error from the renderer",
    19: "The renderer cannot download the map",
    20: "Beatmap version on the mirror is not the same as the replay",
    21: "The replay is corrupted (danser cannot process it)",
};

module.exports.APIcodes = {
    2: "Replay parsing error (bad upload from the sender)",
    5: "Replay file corrupted",
    6: "Invalid osu! gamemode (not 0 = std)",
    7: "The replay has no input data",
    15: "This player is banned from o!rdr",
    16: "This IP is banned from o!rdr",
    17: "This username is banned from o!rdr",
};
