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
<dt><a href="#render_error">render_error</a> ⇒ <code>Event</code></dt>
<dd><p>Get the renderID of a render that failed.</p>
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
start()
```

---

# WebSocket Events

<a name="render_added"></a>

## render_added ⇒ <code>Event</code>
Get the renderID of a render that just got added.

**Kind**: event  

**Example**  
```js
client.on("render_added")
```

<a name="render_done"></a>

## render_done ⇒ <code>Event</code>
Get the renderID of a render that just got finished.

**Kind**: event  

**Example**  
```js
client.on("render_done")
```

<a name="render_error"></a>

## render_error ⇒ <code>Event</code>
Get the renderID of a render that failed.

**Kind**: event  

**Example**  
```js
client.on("render_error")
```

<a name="render_progress"></a>

## render_progress ⇒ <code>Event</code>
Get the renderID and the progression of this render when it changes.

**Kind**: event  

**Example**  
```js
client.on("render_progress")
```
