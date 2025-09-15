[ordr.js - v4.0.0](../README.md) / [client](../modules/client.md) / Client

# Class: Client

[client](../modules/client.md).Client

The main client for interacting with the o!rdr API.

## Table of contents

### Constructors

- [constructor](client.Client.md#constructor)

### Methods

- [emit](client.Client.md#emit)
- [generateDownloadLink](client.Client.md#generatedownloadlink)
- [getCustomSkin](client.Client.md#getcustomskin)
- [getDiscordUserPreset](client.Client.md#getdiscorduserpreset)
- [getInfo](client.Client.md#getinfo)
- [getOnlineServersCount](client.Client.md#getonlineserverscount)
- [getRenders](client.Client.md#getrenders)
- [getServers](client.Client.md#getservers)
- [getServersLeaderboard](client.Client.md#getserversleaderboard)
- [getSkins](client.Client.md#getskins)
- [on](client.Client.md#on)
- [sendRender](client.Client.md#sendrender)
- [start](client.Client.md#start)

## Constructors

### constructor

• **new Client**(`key?`): [`Client`](client.Client.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key?` | `string` | The o!rdr API key |

#### Returns

[`Client`](client.Client.md)

#### Defined in

[client.ts:29](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/client.ts#L29)

## Methods

### emit

▸ **emit**\<`EventName`\>(`event`, `...args`): `boolean`

Emit an event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventName` | extends keyof [`WebSocketEventsMap`](../interfaces/types_ws.WebSocketEventsMap.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `EventName` | The event name |
| `...args` | [`WebSocketEventsMap`](../interfaces/types_ws.WebSocketEventsMap.md)[`EventName`] | The arguments to emit |

#### Returns

`boolean`

true if the event had listeners, false otherwise

#### Defined in

[client.ts:44](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/client.ts#L44)

___

### generateDownloadLink

▸ **generateDownloadLink**(`id`): `Promise`\<[`DynamicLink`](../interfaces/types_api.DynamicLink.md)\>

Generate a temporary video download link for the specified render.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The render id |

#### Returns

`Promise`\<[`DynamicLink`](../interfaces/types_api.DynamicLink.md)\>

The download link

**`See`**

[https://ordr.issou.best/docs/#operation/5](https://ordr.issou.best/docs/#operation/5)

#### Defined in

[client.ts:205](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/client.ts#L205)

___

### getCustomSkin

▸ **getCustomSkin**(`id`): `Promise`\<[`CustomSkin`](../interfaces/types_api.CustomSkin.md)\>

Get a custom skin info.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The custom skin id |

#### Returns

`Promise`\<[`CustomSkin`](../interfaces/types_api.CustomSkin.md)\>

The custom skin

**`See`**

[https://ordr.issou.best/docs/#operation/4](https://ordr.issou.best/docs/#operation/4)

#### Defined in

[client.ts:168](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/client.ts#L168)

___

### getDiscordUserPreset

▸ **getDiscordUserPreset**(`params`): `Promise`\<[`Preset`](../interfaces/types_api.Preset.md)\>

Retrieve a user's preset using their Discord user ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DiscordUserPreset`](../interfaces/types_api_operations.DiscordUserPreset.md) |

#### Returns

`Promise`\<[`Preset`](../interfaces/types_api.Preset.md)\>

The user's preset

**`See`**

[https://ordr.issou.best/docs/#/paths/~1ordr~1presets~1bot/get](https://ordr.issou.best/docs/#/paths/~1ordr~1presets~1bot/get)

#### Defined in

[client.ts:186](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/client.ts#L186)

___

### getInfo

▸ **getInfo**(): `Promise`\<[`Info`](../interfaces/types_api.Info.md)\>

Get o!rdr info. - UNOFFICIAL

#### Returns

`Promise`\<[`Info`](../interfaces/types_api.Info.md)\>

The o!rdr service info

#### Defined in

[client.ts:219](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/client.ts#L219)

___

### getOnlineServersCount

▸ **getOnlineServersCount**(`params?`): `Promise`\<`number`\>

Online servers count. - UNOFFICIAL

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ServersOnlineCount`](../interfaces/types_api_operations.ServersOnlineCount.md) |

#### Returns

`Promise`\<`number`\>

The online servers count

#### Defined in

[client.ts:269](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/client.ts#L269)

___

### getRenders

▸ **getRenders**(`params?`): `Promise`\<[`Renders`](../interfaces/types_api.Renders.md)\>

List of rendered replays.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Renders`](../interfaces/types_api_operations.Renders.md) |

#### Returns

`Promise`\<[`Renders`](../interfaces/types_api.Renders.md)\>

The list of renders.

**`See`**

[https://ordr.issou.best/docs/#operation/2](https://ordr.issou.best/docs/#operation/2)

#### Defined in

[client.ts:107](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/client.ts#L107)

___

### getServers

▸ **getServers**(`params?`): `Promise`\<[`Servers`](../interfaces/types_api.Servers.md)\>

List of servers. - UNOFFICIAL

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Servers`](../interfaces/types_api_operations.Servers.md) |

#### Returns

`Promise`\<[`Servers`](../interfaces/types_api.Servers.md)\>

The servers list

#### Defined in

[client.ts:233](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/client.ts#L233)

___

### getServersLeaderboard

▸ **getServersLeaderboard**(): `Promise`\<[`ServersLeaderboard`](../modules/types_api.md#serversleaderboard)\>

Servers leaderboard. - UNOFFICIAL

#### Returns

`Promise`\<[`ServersLeaderboard`](../modules/types_api.md#serversleaderboard)\>

The servers leaderboard

#### Defined in

[client.ts:253](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/client.ts#L253)

___

### getSkins

▸ **getSkins**(`params?`): `Promise`\<[`Skins`](../interfaces/types_api.Skins.md)\>

List of available skins.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Skins`](../interfaces/types_api_operations.Skins.md) |

#### Returns

`Promise`\<[`Skins`](../interfaces/types_api.Skins.md)\>

The list of skins

**`See`**

[https://ordr.issou.best/docs/#operation/1](https://ordr.issou.best/docs/#operation/1)

#### Defined in

[client.ts:83](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/client.ts#L83)

___

### on

▸ **on**\<`EventName`\>(`event`, `handler`): `this`

Listen for an event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventName` | extends keyof [`WebSocketEventsMap`](../interfaces/types_ws.WebSocketEventsMap.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `EventName` | The event name |
| `handler` | (...`args`: [`WebSocketEventsMap`](../interfaces/types_ws.WebSocketEventsMap.md)[`EventName`]) => `void` | The handling function |

#### Returns

`this`

The client instance

#### Defined in

[client.ts:58](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/client.ts#L58)

___

### sendRender

▸ **sendRender**(`body`): `Promise`\<[`RenderCreate`](../interfaces/types_api.RenderCreate.md)\>

Send a new render.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`RenderCreate`](../interfaces/types_api_operations.RenderCreate.md) | The render info |

#### Returns

`Promise`\<[`RenderCreate`](../interfaces/types_api.RenderCreate.md)\>

The render submission status

**`See`**

[https://ordr.issou.best/docs/#operation/3](https://ordr.issou.best/docs/#operation/3)

#### Defined in

[client.ts:128](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/client.ts#L128)

___

### start

▸ **start**(): `void`

Connect and setup the o!rdr websocket.

#### Returns

`void`

#### Defined in

[client.ts:69](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/client.ts#L69)
