# o!rdr.js

[![axios](https://img.shields.io/github/package-json/dependency-version/LockBlock-dev/ordr.js/axios)](https://www.npmjs.com/package/axios) [![ws](https://img.shields.io/github/package-json/dependency-version/LockBlock-dev/ordr.js/ws)](https://www.npmjs.com/package/ws)

[![GitHub stars](https://img.shields.io/github/stars/LockBlock-dev/ordr.js.svg)](https://github.com/LockBlock-dev/ordr.js/stargazers) ![npm](https://img.shields.io/npm/dm/ordr.js)

ordr.js is a Node.js module that allows you to easily interact with the o!rdr API and WebSocket.

• Promise based

• Performant

• 100% coverage of the o!rdr API and WebSocket


## Installation

• Download [NPM](https://www.npmjs.com/get-npm) and [NodeJS](https://nodejs.org)

With GitHub :

• Download the project or clone it

• Go to the ordr.js folder and do `npm install`

• Require the [index.js](/index.js)

With NPM :

• Download the project

• Do `npm install ordr.js`

• Require the library


## Documentation

See the [API documentation](/API.md)  
See the [WebSocket documentation](/WebSocket.md)  
See the [changelog](/CHANGELOG.md)


## Example usage

The library can be used in both CommonJS and ES Modules

### Using the library - API

```js
const { Client } = require('ordr.js')
//OR
import { Client } from 'ordr.js'

const client = new Client()

client.skins().then(data => {
    console.log(data)
})

//OR

const myFunc = async () => {
    const data = await client.skins()
    console.log(data)
}

myFunc()
```

If you have an API key, you can specify it when initiating the client :

```js
const client = new Client("API_KEY")
```

The library is async, be sure to use [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#syntax) or [.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#syntax)

### Using the library - WebSocket

```js
const { Client } = require('ordr.js')
//OR
import { Client } from 'ordr.js'

const client = new Client()

client.on("event", (data) => {
    console.log(data)
})

client.start()
```

List of events available [here](/WebSocket.md)


## Credits

[o!rdr API](https://ordr.issou.best/docs)


## Copyright

See the [license](/LICENSE)