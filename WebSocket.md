# WebSocket Methods

<dl>
<dt><a href="#start">start()</a></dt>
<dd><p>Start the WebSocket.</p>
</dd>
</dl>

---

# WebSocket Events

<dl>
<dt><a href="#render_added">render_added</a> ⇒ <code>Event</code></dt>
<dd><p>Get the renderID of a render that just got added.</p>
</dd>
<dt><a href="#render_done">render_done</a> ⇒ <code>Event</code></dt>
<dd><p>Get the renderID of a render that just got finished.</p>
</dd>
<dt><a href="#render_failed">render_failed</a> ⇒ <code>Event</code></dt>
<dd><p>Get the renderID and the error code of a render that failed.</p>
</dd>
<dt><a href="#render_progress">render_progress</a> ⇒ <code>Event</code></dt>
<dd><p>Get the renderID and the progression of this render when it changes.</p>
</dd>
</dl>

---

# WebSocket Methods

## start()

Start the WebSocket.

**Kind**: method

**Example**

```js
start();
```

---

# WebSocket Events

<a name="render_added"></a>

## render_added ⇒ <code>Event</code>

Get the render ID of a render that just got added.

**Kind**: event  
**Returns**:

```js
{
    renderID: Number,
}
```

**Example**

```js
client.on("render_added");
```

<a name="render_done"></a>

## render_done ⇒ <code>Event</code>

Get the render ID and video URL of a render that just got finished.

**Kind**: event  
**Returns**:

```js
{
    renderID: Number,
    videoUrl: String,
}
```

**Example**

```js
client.on("render_done");
```

<a name="render_failed"></a>

## render_failed ⇒ <code>Event</code>

Get the render ID, error code and message of a render that failed.

**Kind**: event  
**Returns**:

```js
{
    renderID: Number,
    errorCode: Number,
    errorMessage: String,
}
```

**Example**

```js
client.on("render_failed");
```

<a name="render_progress"></a>

## render_progress ⇒ <code>Event</code>

Get the render ID, submitter username, progress, renderer and description of a render when it changes.

**Kind**: event  
**Returns**:

```js
{
    renderID: Number,
    username: String,
    progress: String,
    renderer: String,
    description: String,
}
```

**Example**

```js
client.on("render_progress");
```
