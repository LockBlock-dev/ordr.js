[ordr.js - v4.0.0](../README.md) / [types/http](../modules/types_http.md) / RequestOptions

# Interface: RequestOptions

[types/http](../modules/types_http.md).RequestOptions

## Hierarchy

- `InternalRequestOptions`

  ↳ **`RequestOptions`**

## Table of contents

### Properties

- [body](types_http.RequestOptions.md#body)
- [files](types_http.RequestOptions.md#files)
- [headers](types_http.RequestOptions.md#headers)
- [method](types_http.RequestOptions.md#method)
- [path](types_http.RequestOptions.md#path)
- [query](types_http.RequestOptions.md#query)
- [service](types_http.RequestOptions.md#service)

## Properties

### body

• `Optional` **body**: [`RequestBody`](../modules/types_http.md#requestbody)

#### Inherited from

InternalRequestOptions.body

#### Defined in

[types/http.ts:20](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/http.ts#L20)

___

### files

• `Optional` **files**: [`Replay`](../modules/types_api.md#replay)[]

#### Inherited from

InternalRequestOptions.files

#### Defined in

[types/http.ts:22](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/http.ts#L22)

___

### headers

• `Optional` **headers**: [`RequestHeaders`](../modules/types_http.md#requestheaders)

#### Inherited from

InternalRequestOptions.headers

#### Defined in

[types/http.ts:21](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/http.ts#L21)

___

### method

• **method**: [`HttpMethod`](../enums/types_http.HttpMethod.md)

#### Inherited from

InternalRequestOptions.method

#### Defined in

[types/http.ts:32](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/http.ts#L32)

___

### path

• **path**: \`/$\{string}\`

#### Inherited from

InternalRequestOptions.path

#### Defined in

[types/http.ts:33](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/http.ts#L33)

___

### query

• `Optional` **query**: `URLSearchParams`

#### Inherited from

InternalRequestOptions.query

#### Defined in

[types/http.ts:23](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/http.ts#L23)

___

### service

• **service**: ``"ordr"`` \| ``"dynlink"``

#### Defined in

[types/http.ts:37](https://github.com/LockBlock-dev/ordr.js/blob/6ed11d0/src/types/http.ts#L37)
