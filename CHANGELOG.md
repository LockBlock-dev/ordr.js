# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.5.0] - 2021-10-12

### Changed

-   Major refactor thanks to [flazepe](https://github.com/flazepe) [#4](https://github.com/LockBlock-dev/ordr.js/pull/4)
-   Dependencies updates

## [3.4.0] - 2021-09-23

### Added

-   /servers endpoint: servers()

## [3.3.2] - 2021-08-19

### Added

-   showKeyOverlay default value in newRender method

### Removed

-   motion blur 960 fps option

## [3.3.1] - 2021-08-19

### Changed

-   fix on render_error deprecation warning

## [3.3.0] - 2021-08-18

### Added

-   nobot param in renders method
-   api devmode
-   showHitCounter param in newRender method
-   defaults in API Doc
-   added error codes 22 & 23

### Changed

-   ts types are now only in 1 file

### Removed

-   index.js

## [3.2.1] - 2021-08-17

### Added

-   Deprecation warning for render_error
-   Prettier

## [3.2.0] - 2021-07-29

### Changed

-   Removed querystring for URLSearchParams

### Added

-   Types for API responses [#3](https://github.com/LockBlock-dev/ordr.js/issues/3)

## [3.1.3] - 2021-07-29

### Changed

-   Fix on renders() and skins() types

## [3.1.2] - 2021-07-29

### Changed

-   Fix on Client constructor types (now optional)

## [3.1.1] - 2021-07-27

### Added

-   More TS types

## [3.1.0] - 2021-07-26

### Added

-   TS types

## [3.0.0] - 2021-07-26

### Added

-   This CHANGELOG file
-   Socket.io-client for WebSocket
-   Errors in the documentation
-   Added progression for "Uploading..." and "Finalizing..." status
-   "returns" property for websocket events in the documentation

### Changed

-   Removed WS for WebSocket
-   WebSocket now returns Objects
-   Better "returns" property for the functions in the documentation
-   ParseError object contains more info

## [2.0.0] - 2021-07-18

### Added

-   ES modules compatibilty

## [1.1.0] - 2021-07-13

### Added

-   render_fail event (rev12)

### Changed

-   default replay params (rev12)
-   better errors with error codes (rev12)
-   better JSdoc

### Deprecated

-   render_error event is deprecated since rev12

### Removed

-   console.log [#1](https://github.com/LockBlock-dev/ordr.js/pull/1)

## [1.0.0] - 2021-06-28

### Added

-   First version
