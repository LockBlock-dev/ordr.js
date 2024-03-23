# o!rdr.js

[![GitHub stars](https://img.shields.io/github/stars/LockBlock-dev/ordr.js.svg)](https://github.com/LockBlock-dev/ordr.js/stargazers)

[![npm](https://img.shields.io/npm/dm/ordr.js)](https://www.npmjs.com/package/ordr.js)

ordr.js is a Node.js module that allows you to easily interact with the o!rdr API and WebSocket.

-   Promise-based
-   Performant
-   100% coverage of the o!rdr API and WebSocket

## Installation

-   Install [NodeJS](https://nodejs.org)
-   Run `npm install ordr.js`

## Documentation

-   [Documentation](/docs/modules/client.md)
-   [WebSocket events](/docs/enums/types_ws.WebSocketEvents.md)
-   [Changelog](/CHANGELOG.md)

## Example usage

### API

```js
import { Client } from "ordr.js";

const client = new Client();

const skins = await client.getSkins();

console.log(skins);
```

### API key

If you have an API key, you can specify it when initiating the client:

```js
const client = new Client("API_KEY");
```

### Sending a replay

You can send a replay by doing the following:

```js
client.sendRender({
    ...
    replay: "https://domain.tld/path/to/your/file.osr",
    ...
})
```

```js
client.sendRender({
    ...
    replay: "path/to/your/file.osr",
    ...
})
```

```js
const file = readFile("path/to/your/file.osr");
client.sendRender({
    ...
    replay: file,
    ...
})
```

```js
const file = createReadStream("path/to/your/file.osr");
client.sendRender({
    ...
    replay: file,
    ...
})
```

### WebSocket

```js
import { Client, Events } from "ordr.js";

const client = new Client();

client.on(Events.Connected, () => console.log("Client connected!"));

client.start();
```

List of events available [here](/docs/enums/types_ws.WebSocketEvents.md)

## Credits

-   [o!rdr API](https://ordr.issou.best/docs)
-   [flazepe](https://github.com/flazepe)

## Copyright

See the [license](/LICENSE)
