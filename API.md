# Methods

<dl>
<dt><a href="#newRender">newRender()</a> ⇒ <code>Promise</code></dt>
<dd><p>Create a new render on o!rdr.</p>
</dd>
<dt><a href="#renders">renders()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get a list of renders.</p>
</dd>
<dt><a href="#skins">skins()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get a list of skins.</p>
</dd>
</dl>

---

<a name="newRender"></a>

## newRender(body) ⇒ <code>Promise</code>
Create a new render on o!rdr.

**Kind**: method  
**Returns**: <code>Promise</code>  

| Param | Type |
| --- | --- |
| body | <code>Object</code> |
| body<area>.BGParallax | <code>Boolean</code> |
| body<area>.breakBGDim | <code>Number</code> |
| body<area>.cursorRainbow | <code>Boolean</code> |
| body<area>.cursorRipples | <code>Boolean</code> |
| body<area>.cursorScaleToCS | <code>Boolean</code> |
| body<area>.cursorSize | <code>Number</code> |
| body<area>.cursorTrail | <code>Boolean</code> |
| body<area>.cursorTrailGlow | <code>Boolean</code> |
| body<area>.drawComboNumbers | <code>Boolean</code> |
| body<area>.drawFollowPoints | <code>Boolean</code> |
| body<area>.globalVolume | <code>Number</code> |
| body<area>.hitsoundVolume | <code>Number</code> |
| body<area>.inGameBGDim | <code>Number</code> |
| body<area>.introBGDim | <code>Number</code> |
| body<area>.loadStoryboard | <code>Boolean</code> |
| body<area>.loadVideo | <code>Boolean</code> |
| body<area>.motionBlur960fps | <code>Boolean</code> |
| body<area>.musicVolume | <code>Number</code> |
| body<area>.objectsFlashToTheBeat | <code>Boolean</code> |
| body<area>.objectsRainbow | <code>Boolean</code> |
| body<area>.replayFile | <code>File</code> |
| body<area>.replayURL | <code>String</code> |
| body<area>.resolution | <code>String</code> |
| body<area>.scaleToTheBeat | <code>Boolean</code> |
| body<area>.seizureWarning | <code>Boolean</code> |
| body<area>.showBorders | <code>Boolean</code> |
| body<area>.showComboCounter | <code>Boolean</code> |
| body<area>.showDanserLogo | <code>Boolean</code> |
| body<area>.showHPBar | <code>Boolean</code> |
| body<area>.showHitErrorMeter | <code>Boolean</code> |
| body<area>.showKeyOverlay | <code>Boolean</code> |
| body<area>.showMods | <code>Boolean</code> |
| body<area>.showPPCounter | <code>Boolean</code> |
| body<area>.showResultScreen | <code>Boolean</code> |
| body<area>.showScore | <code>Boolean</code> |
| body<area>.showScoreboard | <code>Boolean</code> |
| body<area>.showUnstableRate | <code>Boolean</code> |
| body<area>.skin | <code>String</code> |
| body<area>.skip | <code>Boolean</code> |
| body<area>.sliderMerge | <code>Boolean</code> |
| body<area>.sliderSnaking | <code>Boolean</code> |
| body<area>.useBeatmapColors | <code>Boolean</code> |
| body<area>.useHitCircleColor | <code>Boolean</code> |
| body<area>.useSkinColors | <code>Boolean</code> |
| body<area>.useSkinCursor | <code>Boolean</code> |
| body<area>.username | <code>String</code> |

**Example**  
```js
newRender({ replayURL: "https://url.tld/file.osr", username: "ordr.js", resolution: "1920x1080", ... })
```


<a name="renders"></a>

## renders(params) ⇒ <code>Promise</code>
Get a list of renders.

**Kind**: method  
**Returns**: <code>Promise</code>

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | query parameters |
| params<area>.ordrUsername | <code>String</code> | renders that matches the most this o!rdr username |
| params<area>.page | <code>Number</code> | page number |
| params<area>.pageSize | <code>Number</code> | number of renders that the API will return|
| params<area>.replayUsername | <code>String</code> | renders that matches the most this replay username |
| params<area>.renderID | <code>Number</code> | render with this specific renderID |

**Example**  
```js
renders()
renders({ pageSize: 10, page: 3})
```

<a name="skins"></a>

## skins(params) ⇒ <code>Promise</code>
Get a list of skins.

**Kind**: method  
**Returns**: <code>Promise</code>

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | query parameters |
| params<area>.name | <code>String</code> | skins that matches the most this name |
| params<area>.page | <code>Number</code> | page number |
| params<area>.pageSize | <code>Number</code> | number of renders that the API will return|

**Example**  
```js
skins()
skins({ pageSize: 10, page: 3})
```
