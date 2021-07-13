module.exports.WScodes = {
    1: "emergency stop (triggered manually)",
    2: "replay parsing error (bad upload from the sender)",
    3: "replay parsing error (bad download from the server), can happen because of invalid characters",
    4: "all beatmap mirrors are unavailable",
    5: "replay file corrupted (cannot parse)",
    6: "invalid osu! gamemode (not 0 = std)",
    7: "the replay has no input data",
    8: "beatmap does not exist on osu! (probably because of custom difficulty or non-submitted map)",
    9: "audio for the map is unavailable (because of copyright claim)",
    10: "cannot connect to osu! api",
    11: "the replay has the autoplay mod",
    12: "the replay username has invalid characters",
    13: "the beatmap is longer than 15 minutes",
    14: "beatmap not found on all the beatmap mirrors",
    18: "unknown error from the renderer",
    19: "the renderer cannot download the map",
    20: "beatmap version on the mirror is not the same as the replay",
    21: "the replay is corrupted (danser cannot process it)"
}

module.exports.APIcodes = {
    2: "replay parsing error (bad upload from the sender)",
    5: "replay file corrupted",
    6: "invalid osu! gamemode (not 0 = std)",
    7: "the replay has no input data",
    15: "this player is banned from o!rdr",
    16: "this IP is banned from o!rdr",
    17: "this username is banned from o!rdr"
}