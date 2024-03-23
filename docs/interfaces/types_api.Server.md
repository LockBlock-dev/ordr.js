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

[types/api/index.ts:154](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L154)

___

### avgRenderTime

• **avgRenderTime**: `number`

#### Defined in

[types/api/index.ts:164](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L164)

___

### avgUploadTime

• **avgUploadTime**: `number`

#### Defined in

[types/api/index.ts:165](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L165)

___

### cpu

• **cpu**: `string`

#### Defined in

[types/api/index.ts:159](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L159)

___

### customization

• **customization**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backgroundType` | `number` |
| `textColor` | ``"default"`` \| `Uppercase`\<`string`\> |

#### Defined in

[types/api/index.ts:168](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L168)

___

### enabled

• **enabled**: `boolean`

#### Defined in

[types/api/index.ts:150](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L150)

___

### gpu

• **gpu**: `string`

#### Defined in

[types/api/index.ts:160](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L160)

___

### lastScoreReset

• **lastScoreReset**: `string`

#### Defined in

[types/api/index.ts:174](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L174)

___

### lastSeen

• **lastSeen**: `string`

#### Defined in

[types/api/index.ts:151](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L151)

___

### motionBlurCapable

• **motionBlurCapable**: `boolean`

#### Defined in

[types/api/index.ts:161](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L161)

___

### name

• **name**: `string`

#### Defined in

[types/api/index.ts:152](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L152)

___

### ownerUserId

• **ownerUserId**: `number`

#### Defined in

[types/api/index.ts:172](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L172)

___

### ownerUsername

• **ownerUsername**: `string`

#### Defined in

[types/api/index.ts:173](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L173)

___

### power

• **power**: ``"ONLINE"`` \| ``"OFFLINE"``

#### Defined in

[types/api/index.ts:155](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L155)

___

### priority

• **priority**: `number`

#### Defined in

[types/api/index.ts:153](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L153)

___

### renderingType

• **renderingType**: ``"cpu"`` \| ``"gpu"``

#### Defined in

[types/api/index.ts:158](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L158)

___

### status

• **status**: ``"Idle"`` \| ``"Working"`` \| ``"Errored! Waiting for a restart."``

#### Defined in

[types/api/index.ts:156](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L156)

___

### totalAvgTime

• **totalAvgTime**: `number`

#### Defined in

[types/api/index.ts:166](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L166)

___

### totalRendered

• **totalRendered**: `number`

#### Defined in

[types/api/index.ts:157](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L157)

___

### totalUploadedVideosSize

• **totalUploadedVideosSize**: `number`

#### Defined in

[types/api/index.ts:167](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L167)

___

### uhdCapable

• **uhdCapable**: `boolean`

#### Defined in

[types/api/index.ts:163](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L163)

___

### usingOsuApi

• **usingOsuApi**: `boolean`

#### Defined in

[types/api/index.ts:162](https://github.com/LockBlock-dev/ordr.js/blob/b45a0e0/src/types/api/index.ts#L162)
