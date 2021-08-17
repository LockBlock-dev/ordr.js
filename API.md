# Methods

<dl>
<dt><a href="#newRender">newRender(body)</a> ⇒ <code>Promise</code></dt>
<dd><p>Create a new render on o!rdr.</p>
</dd>
<dt><a href="#renders">renders(params)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get a list of renders.</p>
</dd>
<dt><a href="#skins">skins(params)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get a list of skins.</p>
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

| Param                            | Type                 |
| -------------------------------- | -------------------- |
| body                             | <code>Object</code>  |
| body<area>.BGParallax            | <code>Boolean</code> |
| body<area>.breakBGDim            | <code>Number</code>  |
| body<area>.cursorRainbow         | <code>Boolean</code> |
| body<area>.cursorRipples         | <code>Boolean</code> |
| body<area>.cursorScaleToCS       | <code>Boolean</code> |
| body<area>.cursorSize            | <code>Number</code>  |
| body<area>.cursorTrail           | <code>Boolean</code> |
| body<area>.cursorTrailGlow       | <code>Boolean</code> |
| body<area>.drawComboNumbers      | <code>Boolean</code> |
| body<area>.drawFollowPoints      | <code>Boolean</code> |
| body<area>.globalVolume          | <code>Number</code>  |
| body<area>.hitsoundVolume        | <code>Number</code>  |
| body<area>.inGameBGDim           | <code>Number</code>  |
| body<area>.introBGDim            | <code>Number</code>  |
| body<area>.loadStoryboard        | <code>Boolean</code> |
| body<area>.loadVideo             | <code>Boolean</code> |
| body<area>.motionBlur960fps      | <code>Boolean</code> |
| body<area>.musicVolume           | <code>Number</code>  |
| body<area>.objectsFlashToTheBeat | <code>Boolean</code> |
| body<area>.objectsRainbow        | <code>Boolean</code> |
| body<area>.replayFile            | <code>File</code>    |
| body<area>.replayURL             | <code>String</code>  |
| body<area>.resolution            | <code>String</code>  |
| body<area>.scaleToTheBeat        | <code>Boolean</code> |
| body<area>.seizureWarning        | <code>Boolean</code> |
| body<area>.showBorders           | <code>Boolean</code> |
| body<area>.showComboCounter      | <code>Boolean</code> |
| body<area>.showDanserLogo        | <code>Boolean</code> |
| body<area>.showHPBar             | <code>Boolean</code> |
| body<area>.showHitErrorMeter     | <code>Boolean</code> |
| body<area>.showKeyOverlay        | <code>Boolean</code> |
| body<area>.showMods              | <code>Boolean</code> |
| body<area>.showPPCounter         | <code>Boolean</code> |
| body<area>.showResultScreen      | <code>Boolean</code> |
| body<area>.showScore             | <code>Boolean</code> |
| body<area>.showScoreboard        | <code>Boolean</code> |
| body<area>.showUnstableRate      | <code>Boolean</code> |
| body<area>.skin                  | <code>String</code>  |
| body<area>.skip                  | <code>Boolean</code> |
| body<area>.sliderMerge           | <code>Boolean</code> |
| body<area>.sliderSnakingIn       | <code>Boolean</code> |
| body<area>.sliderSnakingOut      | <code>Boolean</code> |
| body<area>.useBeatmapColors      | <code>Boolean</code> |
| body<area>.useHitCircleColor     | <code>Boolean</code> |
| body<area>.useSkinColors         | <code>Boolean</code> |
| body<area>.useSkinCursor         | <code>Boolean</code> |
| body<area>.useSkinHitsounds      | <code>Boolean</code> |
| body<area>.username              | <code>String</code>  |

**Example**

```js
newRender({ replayURL: "https://url.tld/file.osr", username: "ordr.js", resolution: "1920x1080", ... })
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

| Param                       | Type                | Description                                        |
| --------------------------- | ------------------- | -------------------------------------------------- |
| params                      | <code>Object</code> | query parameters                                   |
| params<area>.ordrUsername   | <code>String</code> | renders that matches the most this o!rdr username  |
| params<area>.page           | <code>Number</code> | page number                                        |
| params<area>.pageSize       | <code>Number</code> | number of renders that the API will return         |
| params<area>.renderID       | <code>Number</code> | render with this specific renderID                 |
| params<area>.replayUsername | <code>String</code> | renders that matches the most this replay username |

**Example**

```js
renders();
renders({ pageSize: 10, page: 3 });
renders({ renderID: 1234 });
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

| Param                 | Type                | Description                                |
| --------------------- | ------------------- | ------------------------------------------ |
| params                | <code>Object</code> | query parameters                           |
| params<area>.search   | <code>String</code> | skins that matches the most this string    |
| params<area>.page     | <code>Number</code> | page number                                |
| params<area>.pageSize | <code>Number</code> | number of renders that the API will return |

**Example**

```js
skins();
skins({ pageSize: 10, page: 3 });
skins({ search: "best-skin-osu" });
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
