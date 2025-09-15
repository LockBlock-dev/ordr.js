[ordr.js - v4.0.0](../README.md) / [types/api](../modules/types_api.md) / Server

# Interface: Server

[types/api](../modules/types_api.md).Server

## Table of contents

### Properties

- [avgFPS](types_api.Server.md#avgfps)
- [avgRenderTime](types_api.Server.md#avgrendertime)
- [avgUploadTime](types_api.Server.md#avguploadtime)
- [cpu](types_api.Server.md#cpu)
- [customization](types_api.Server.md#customization)
- [enabled](types_api.Server.md#enabled)
- [gpu](types_api.Server.md#gpu)
- [lastScoreReset](types_api.Server.md#lastscorereset)
- [lastSeen](types_api.Server.md#lastseen)
- [motionBlurCapable](types_api.Server.md#motionblurcapable)
- [name](types_api.Server.md#name)
- [ownerUserId](types_api.Server.md#owneruserid)
- [ownerUsername](types_api.Server.md#ownerusername)
- [power](types_api.Server.md#power)
- [priority](types_api.Server.md#priority)
- [renderingType](types_api.Server.md#renderingtype)
- [status](types_api.Server.md#status)
- [totalAvgTime](types_api.Server.md#totalavgtime)
- [totalRendered](types_api.Server.md#totalrendered)
- [totalUploadedVideosSize](types_api.Server.md#totaluploadedvideossize)
- [uhdCapable](types_api.Server.md#uhdcapable)
- [usingOsuApi](types_api.Server.md#usingosuapi)

## Properties

### avgFPS

• **avgFPS**: `number`

#### Defined in

[types/api/index.ts:225](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L225)

___

### avgRenderTime

• **avgRenderTime**: `number`

#### Defined in

[types/api/index.ts:235](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L235)

___

### avgUploadTime

• **avgUploadTime**: `number`

#### Defined in

[types/api/index.ts:236](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L236)

___

### cpu

• **cpu**: `string`

#### Defined in

[types/api/index.ts:230](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L230)

___

### customization

• **customization**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backgroundType` | `number` |
| `textColor` | ``"default"`` \| `Uppercase`\<`string`\> |

#### Defined in

[types/api/index.ts:239](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L239)

___

### enabled

• **enabled**: `boolean`

#### Defined in

[types/api/index.ts:221](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L221)

___

### gpu

• **gpu**: `string`

#### Defined in

[types/api/index.ts:231](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L231)

___

### lastScoreReset

• **lastScoreReset**: `string`

#### Defined in

[types/api/index.ts:245](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L245)

___

### lastSeen

• **lastSeen**: `string`

#### Defined in

[types/api/index.ts:222](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L222)

___

### motionBlurCapable

• **motionBlurCapable**: `boolean`

#### Defined in

[types/api/index.ts:232](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L232)

___

### name

• **name**: `string`

#### Defined in

[types/api/index.ts:223](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L223)

___

### ownerUserId

• **ownerUserId**: `number`

#### Defined in

[types/api/index.ts:243](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L243)

___

### ownerUsername

• **ownerUsername**: `string`

#### Defined in

[types/api/index.ts:244](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L244)

___

### power

• **power**: ``"ONLINE"`` \| ``"OFFLINE"``

#### Defined in

[types/api/index.ts:226](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L226)

___

### priority

• **priority**: `number`

#### Defined in

[types/api/index.ts:224](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L224)

___

### renderingType

• **renderingType**: ``"cpu"`` \| ``"gpu"``

#### Defined in

[types/api/index.ts:229](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L229)

___

### status

• **status**: ``"Idle"`` \| ``"Working"`` \| ``"Errored! Waiting for a restart."``

#### Defined in

[types/api/index.ts:227](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L227)

___

### totalAvgTime

• **totalAvgTime**: `number`

#### Defined in

[types/api/index.ts:237](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L237)

___

### totalRendered

• **totalRendered**: `number`

#### Defined in

[types/api/index.ts:228](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L228)

___

### totalUploadedVideosSize

• **totalUploadedVideosSize**: `number`

#### Defined in

[types/api/index.ts:238](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L238)

___

### uhdCapable

• **uhdCapable**: `boolean`

#### Defined in

[types/api/index.ts:234](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L234)

___

### usingOsuApi

• **usingOsuApi**: `boolean`

#### Defined in

[types/api/index.ts:233](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/api/index.ts#L233)
