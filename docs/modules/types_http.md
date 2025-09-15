[ordr.js - v4.0.0](../README.md) / types/http

# Module: types/http

## Table of contents

### Enumerations

- [HttpMethod](../enums/types_http.HttpMethod.md)

### Interfaces

- [RequestData](../interfaces/types_http.RequestData.md)
- [RequestFile](../interfaces/types_http.RequestFile.md)
- [RequestOptions](../interfaces/types_http.RequestOptions.md)

### Type Aliases

- [RequestBody](types_http.md#requestbody)
- [RequestHeaders](types_http.md#requestheaders)
- [RequestPath](types_http.md#requestpath)
- [UndiciRequestBody](types_http.md#undicirequestbody)
- [UndiciRequestOptions](types_http.md#undicirequestoptions)

## Type Aliases

### RequestBody

Ƭ **RequestBody**: `Record`\<`string`, `unknown`\>

#### Defined in

[types/http.ts:17](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/http.ts#L17)

___

### RequestHeaders

Ƭ **RequestHeaders**: `Record`\<`string`, `string`\>

#### Defined in

[types/http.ts:16](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/http.ts#L16)

___

### RequestPath

Ƭ **RequestPath**: \`/$\{string}\`

#### Defined in

[types/http.ts:26](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/http.ts#L26)

___

### UndiciRequestBody

Ƭ **UndiciRequestBody**: `Dispatcher.DispatchOptions`[``"body"``]

#### Defined in

[types/http.ts:41](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/http.ts#L41)

___

### UndiciRequestOptions

Ƭ **UndiciRequestOptions**: `Parameters`\<typeof `request`\>[``1``]

#### Defined in

[types/http.ts:40](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/http.ts#L40)
