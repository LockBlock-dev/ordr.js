# Properties

<dl>
<dt><a href="#API_KEY">API_KEY</a></dt>
<dd><p>The API Bot Key.</p>
</dd>
<dt><a href="#API_URL">API_URL</a></dt>
<dd><p>The base API URL.</p>
</dd>
<dt><a href="#WEBSOCKET_URL">WEBSOCKET_URL</a></dt>
<dd><p>The WebSocket URL.</p>
</dd>
<dt><a href="#API_CODES">API_CODES</a></dt>
<dd><p>API error codes.</p>
</dd>
<dt><a href="#WS_CODES">WS_CODES</a></dt>
<dd><p>WebSocket error codes.</p>
</dd>
</dl>

# Methods

<dl>
<dt><a href="#newRender">newRender(body)</a> ⇒ <code>Promise</code></dt>
<dd><p>Create a new render on o!rdr.</p>
</dd>
<dt><a href="#onlineCount">onlineCount(params)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get the count of online servers.</p>
</dd>
<dt><a href="#renders">renders(params)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get a list of renders.</p>
</dd>
<dt><a href="#skins">skins(params)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get a list of skins.</p>
</dd>
<dt><a href="#servers">servers(params)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get a list of servers.</p>
</dd>
</dl>

# Errors

<dl>
<dt><a href="APIError">APIError</a> ⇒ <code>Error</code></dt>
<dd><p>Error related to the API.</p>
</dd>
<dt><a href="FatalError">FatalError</a> ⇒ <code>Error</code></dt>
<dd><p>Fatal error in the program. (you don't want this one)</p>
</dd>
<dt><a href="ParseError">ParseError</a> ⇒ <code>Error</code></dt>
<dd><p>Error related to a parsing error in the response from the API.</p>
</dd>
</dl>

---

# Properties

<a name="API_KEY"></a>

## API_KEY

The API Bot Key.

**Kind**: property

**Example**

```js
client.API_KEY;
```

<a name="API_URL"></a>

## API_URL

The base API URL.

**Kind**: property

**Example**

```js
client.API_URL;
```

<a name="WEBSOCKET_URL"></a>

## WEBSOCKET_URL

The WebSocket URL.

**Kind**: property

**Example**

```js
client.WEBSOCKET_URL;
```

<a name="API_CODES"></a>

## API_CODES

API error codes.

**Kind**: property

**Example**

```js
client.API_CODES;
```

<a name="WS_CODES"></a>

## WS_CODES

WebSocket error codes.

**Kind**: property

**Example**

```js
client.WS_CODES;
```

# Methods

<a name="newRender"></a>

## newRender(body) ⇒ <code>Promise</code>

Create a new render on o!rdr.

**Kind**: method  
**Returns**:

```js
{

    message: String,
    renderID: Number,
    errorCode: Number

}
```

| Param                              | Type                 | Default            |
| ---------------------------------- | -------------------- | ------------------ |
| body                               | <code>Object</code>  |                    |
| body<area>.BGParallax              | <code>Boolean</code> | <code>false</code> |
| body<area>.breakBGDim              | <code>Number</code>  | <code>30</code>    |
| body<area>.cursorRainbow           | <code>Boolean</code> | <code>false</code> |
| body<area>.cursorRipples           | <code>Boolean</code> | <code>false</code> |
| body<area>.cursorScaleToCS         | <code>Boolean</code> | <code>false</code> |
| body<area>.cursorSize              | <code>Number</code>  | <code>1</code>     |
| body<area>.cursorTrail             | <code>Boolean</code> | <code>true</code>  |
| body<area>.cursorTrailGlow         | <code>Boolean</code> | <code>false</code> |
| body<area>.drawComboNumbers        | <code>Boolean</code> | <code>true</code>  |
| body<area>.drawFollowPoints        | <code>Boolean</code> | <code>true</code>  |
| body<area>.globalVolume            | <code>Number</code>  | <code>50</code>    |
| body<area>.hitsoundVolume          | <code>Number</code>  | <code>50</code>    |
| body<area>.inGameBGDim             | <code>Number</code>  | <code>75</code>    |
| body<area>.introBGDim              | <code>Number</code>  | <code>0</code>     |
| body<area>.loadStoryboard          | <code>Boolean</code> | <code>true</code>  |
| body<area>.loadVideo               | <code>Boolean</code> | <code>true</code>  |
| body<area>.musicVolume             | <code>Number</code>  | <code>50</code>    |
| body<area>.objectsFlashToTheBeat   | <code>Boolean</code> | <code>false</code> |
| body<area>.objectsRainbow          | <code>Boolean</code> | <code>false</code> |
| body<area>.playNightcoreSamples    | <code>Boolean</code> | <code>true</code>  |
| body<area>.replayFile              | <code>File</code>    |                    |
| body<area>.replayURL               | <code>String</code>  |                    |
| body<area>.resolution              | <code>String</code>  |                    |
| body<area>.scaleToTheBeat          | <code>Boolean</code> | <code>false</code> |
| body<area>.seizureWarning          | <code>Boolean</code> | <code>false</code> |
| body<area>.showAimErrorMeter       | <code>Boolean</code> | <code>false</code> |
| body<area>.showAvatarsOnScoreboard | <code>Boolean</code> | <code>false</code> |
| body<area>.showBorders             | <code>Boolean</code> | <code>false</code> |
| body<area>.showComboCounter        | <code>Boolean</code> | <code>true</code>  |
| body<area>.showDanserLogo          | <code>Boolean</code> | <code>true</code>  |
| body<area>.showHPBar               | <code>Boolean</code> | <code>true</code>  |
| body<area>.showHitCounter          | <code>Boolean</code> | <code>false</code> |
| body<area>.showHitErrorMeter       | <code>Boolean</code> | <code>true</code>  |
| body<area>.showKeyOverlay          | <code>Boolean</code> | <code>true</code>  |
| body<area>.showMods                | <code>Boolean</code> | <code>true</code>  |
| body<area>.showPPCounter           | <code>Boolean</code> | <code>true</code>  |
| body<area>.showResultScreen        | <code>Boolean</code> | <code>true</code>  |
| body<area>.showScore               | <code>Boolean</code> | <code>true</code>  |
| body<area>.showScoreboard          | <code>Boolean</code> | <code>false</code> |
| body<area>.showUnstableRate        | <code>Boolean</code> | <code>true</code>  |
| body<area>.skin                    | <code>String</code>  |                    |
| body<area>.skip                    | <code>Boolean</code> | <code>true</code>  |
| body<area>.sliderMerge             | <code>Boolean</code> | <code>false</code> |
| body<area>.sliderSnakingIn         | <code>Boolean</code> | <code>true</code>  |
| body<area>.sliderSnakingOut        | <code>Boolean</code> | <code>true</code>  |
| body<area>.useBeatmapColors        | <code>Boolean</code> | <code>true</code>  |
| body<area>.useHitCircleColor       | <code>Boolean</code> | <code>true</code>  |
| body<area>.useSkinColors           | <code>Boolean</code> | <code>false</code> |
| body<area>.useSkinCursor           | <code>Boolean</code> | <code>true</code>  |
| body<area>.useSkinHitsounds        | <code>Boolean</code> | <code>true</code>  |
| body<area>.username                | <code>String</code>  |                    |
| body<area>.devmode                 | <code>String</code>  |                    |

**Available devmodes:**

| Devmode              | Description                                               |
| -------------------- | --------------------------------------------------------- |
| <code>success</code> | simulates a request that will successfully render a video |
| <code>fail</code>    | simulates a request that will fail on the API level       |
| <code>wsfail</code>  | simulates a request that will fail on the Websocket level |

**Example**

```js
client.newRender({ replayURL: "https://url.tld/file.osr", username: "ordr.js", resolution: "1920x1080", ... })
```

<a name="onlineCount"></a>

## onlineCount(params) ⇒ <code>Promise</code>

Get the count of online servers.

**Kind**: method  
**Returns**:

```js
Number;
```

| Param                      | Type                 | Default            | Description                                  |
| -------------------------- | -------------------- | ------------------ | -------------------------------------------- |
| params                     | <code>Object</code>  |                    | query parameters                             |
| params<area>.hasMotionBlur | <code>Boolean</code> | <code>false</code> | filter servers that have motion blur enabled |
| params<area>.hasUhds       | <code>Boolean</code> | <code>false</code> | filter servers that have 4K enabled          |
| params<area>.usingOsuApi   | <code>Boolean</code> | <code>false</code> | filter servers that have an Osu! API key     |

**Example**

```js
client.onlineCount();
client.onlineCount({ hasMotionBlur: true });
client.onlineCount({ usingOsuApi: true, hasUhd: true });
```

<a name="renders"></a>

## renders(params) ⇒ <code>Promise</code>

Get a list of renders.

**Kind**: method  
**Returns**:

```js
{
    renders: Array,
    maxRenders: Number
}
```

| Param                       | Type                 | Default            | Description                                                           |
| --------------------------- | -------------------- | ------------------ | --------------------------------------------------------------------- |
| params                      | <code>Object</code>  |                    | query parameters                                                      |
| params<area>.ordrUsername   | <code>String</code>  |                    | renders that matches the most this o!rdr username                     |
| params<area>.page           | <code>Number</code>  | <code>1</code>     | page number                                                           |
| params<area>.pageSize       | <code>Number</code>  | <code>50</code>    | number of renders that the API will return                            |
| params<area>.renderID       | <code>Number</code>  |                    | render with this specific renderID                                    |
| params<area>.replayUsername | <code>String</code>  |                    | renders that matches the most this replay username                    |
| params<area>.nobots         | <code>Boolean</code> | <code>false</code> | hide bots from the returned render query                              |
| params<area>.lite           | <code>Boolean</code> | <code>false</code> | lite mode gives less info                                             |
| params<area>.link           | <code>String</code>  |                    | path of a shortlink (example pov8n for https://link.issou.best/pov8n) |

**Example**

```js
client.renders();
client.renders({ pageSize: 10, page: 3, nobots: true });
client.renders({ renderID: 1234 });
client.renders({ lite: true });
client.renders({ link: "pov8n" });
```

<a name="skins"></a>

## skins(params) ⇒ <code>Promise</code>

Get a list of skins.

**Kind**: method  
**Returns**:

```js
{
    message: String,
    skins: Array,
    maxSkins: Number
}
```

| Param                 | Type                | Default          | Description                                |
| --------------------- | ------------------- | ---------------- | ------------------------------------------ |
| params                | <code>Object</code> |                  | query parameters                           |
| params<area>.search   | <code>String</code> |                  | skins that matches the most this string    |
| params<area>.page     | <code>Number</code> | <code>1</code>   | page number                                |
| params<area>.pageSize | <code>Number</code> | <code>100</code> | number of renders that the API will return |

**Example**

```js
client.skins();
client.skins({ pageSize: 10, page: 3 });
client.skins({ search: "best-skin-osu" });
```

<a name="servers"></a>

## servers(params) ⇒ <code>Promise</code>

Get a list of servers.

**Kind**: method  
**Returns**:

```js
{
    servers: Array,
}
```

| Param             | Type                | Default                   | Description      |
| ----------------- | ------------------- | ------------------------- | ---------------- |
| params            | <code>Object</code> |                           | query parameters |
| params<area>.sort | <code>String</code> | sort the servers by score | sorting option   |

**Available sorting options:**

| Sorting option           | Description                               |
| ------------------------ | ----------------------------------------- |
| <code>online</code>      | sort the servers by online status         |
| <code>totalvideos</code> | sort the servers by total videos uploaded |

**Example**

```js
client.servers();
client.servers({ sort: "online" });
client.servers({ sort: "totalvideos" });
```

# Errors

<a name="APIError"></a>

## APIError ⇒ <code>Error</code>

Error related to the API

**Returns**:

```js
{
    message: String,
    type: String,
    status: Number,
    method: String,
    url: String,
    result: String,
    code: Number,
    error: String
}
```

**Example**

```js
{
    message: "Error parsing response: No replay file provided.",
    type: 'APIError',
    status: 200,
    method: 'POST',
    url: 'https://ordr-api.issou.best/renders'
}
{
    message: "Request failed with status code 401",
    type: 'APIError',
    status: 401,
    method: 'POST',
    url: 'https://ordr-api.issou.best/renders',
    result: "This player is banned from o!rdr. Time left before unban: 2.00 days. Reason: I don't like you :)",
    code: 15,
    error: "This player is banned from o!rdr"
}
```

<a name="FatalError"></a>

## FatalError ⇒ <code>Error</code>

Fatal error in the program. (you don't want this one)

**Kind**: method  
**Returns**:

```js
{
    message: String,
    type: String,
    stack: String
}
```

<a name="ParseError"></a>

## ParseError ⇒ <code>Error</code>

Error related to a parsing error in the response from the API.

**Kind**: method  
**Returns**:

```js
{
    message: String,
    type: String,
    status: Number,
    method: String,
    url: String,
    response: String|Object
}
```

**Example**

```js
{
    message: "Error parsing response",
    type: 'ParseError',
    status: 200,
    method: 'GET',
    url: 'https://ordr-api.issou.best/renders',
    response: ""
}
```
