# o!rdr.js

[![axios](https://img.shields.io/github/package-json/dependency-version/LockBlock-dev/ordr.js/axios)](https://www.npmjs.com/package/axios) [![ws](https://img.shields.io/github/package-json/dependency-version/LockBlock-dev/ordr.js/socket.io-client)](https://www.npmjs.com/package/socket.io-client)

[![GitHub stars](https://img.shields.io/github/stars/LockBlock-dev/ordr.js.svg)](https://github.com/LockBlock-dev/ordr.js/stargazers) ![npm](https://img.shields.io/npm/dm/ordr.js)

ordr.js is a Node.js module that allows you to easily interact with the o!rdr API and WebSocket.

-   Promise-based
-   Performant
-   100% coverage of the o!rdr API and WebSocket

## Installation

-   Install [NodeJS](https://nodejs.org).

### With GitHub:

-   Download or clone the project.
-   Go to the `ordr.js` folder and run `npm install`.
-   Require [`client.js`](/src/client.js).

### With npm:

-   Run `npm install ordr.js`.
-   Require the library.

## Documentation

-   [API documentation](/API.md)
-   [WebSocket documentation](/WebSocket.md)
-   [changelog](/CHANGELOG.md)

## Example usage

The library can be used in both CommonJS and ES Modules

### Using the library - API

The library is async, be sure to use [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#syntax) or [`.then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#syntax)

```js
const { Client } = require("ordr.js");
// OR
import { Client } from "ordr.js";

const client = new Client();

client.skins().then((data) => {
    console.log(data);
});
// OR
const getSkins = async () => {
    const data = await client.skins();
    console.log(data);
};

getSkins();
```

### Using the library - API key

If you have an API key, you can specify it when initiating the client:

```js
const client = new Client("API_KEY");
```

### Using the library - replayFile

You can send a replay file by doing the following:

```js
const fileBuffer = fs.createReadStream("path/to/your/file.osr");
client.newRender({
    ...
    replayFile: fileBuffer,
    ...
})
```

### Using the library - WebSocket

```js
const { Client } = require("ordr.js");
// OR
import { Client } from "ordr.js";

const client = new Client();

client.on("event", (data) => {
    console.log(data);
});

client.start();
```

List of events available [here](/WebSocket.md)

## Credits

-   [o!rdr API](https://ordr.issou.best/docs)
-   [flazepe](https://github.com/flazepe)

## Copyright

See the [license](/LICENSE)
