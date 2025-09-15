[ordr.js - v4.0.0](../README.md) / [types/ws/events](../modules/types_ws_events.md) / RenderFailed

# Interface: RenderFailed

[types/ws/events](../modules/types_ws_events.md).RenderFailed

## Table of contents

### Properties

- [errorCode](types_ws_events.RenderFailed.md#errorcode)
- [errorMessage](types_ws_events.RenderFailed.md#errormessage)
- [renderId](types_ws_events.RenderFailed.md#renderid)

## Properties

### errorCode

• **errorCode**: ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``15`` \| ``18`` \| ``19`` \| ``20`` \| ``21`` \| ``22`` \| ``27`` \| ``28``

#### Defined in

[types/ws/events.ts:16](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/ws/events.ts#L16)

___

### errorMessage

• **errorMessage**: ``"Unknown error triggered by an emergency stop."`` \| ``"Replay download error (bad upload from the sender)."`` \| ``"Replay download error (bad download from the server), this can happen because of invalid characters."`` \| ``"All beatmap mirrors are unavailable or the beatmap isn't yet available on them, try again later."`` \| ``"Beatmap not found on the mirrors. Retry later."`` \| ``"Unknown error from the renderer. Try to send the replay again."`` \| ``"The renderer cannot download the map. This may be a server-side problem from issou.best."`` \| ``"The beatmap version on the mirror is not the same as the replay. Don't retry sending it as we have already retried for you."`` \| ``"This replay is corrupted. Try re-exporting it."`` \| ``"There is a problem with the generated video. Try to send the replay again."`` \| ``"Something went wrong, the generated video is not your replay. Try to send the replay again."`` \| ``"The renderer cannot download the replay. Try to send the replay again."``

#### Defined in

[types/ws/events.ts:17](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/ws/events.ts#L17)

___

### renderId

• **renderId**: `number`

#### Defined in

[types/ws/events.ts:15](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/ws/events.ts#L15)
