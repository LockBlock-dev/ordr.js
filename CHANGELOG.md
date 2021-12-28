# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.7.0] - 2021-12-28

### Added

-   Added error code 27
-   /onlineCount endpoint: onlineCount()

### Changed

-   TS types update
-   Lite mode for /renders: renders()

## [3.6.0] - 2021-11-04

### Added

-   Added showAimErrorMeter and showAvatarsOnScoreboard param in newRender method
-   Added error codes 25 & 26
-   TS types for new values returned by /skins endpoint

### Changed

-   Dependencies updates
-   Switched WebSocket events to their JSON version

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

-   Motion blur 960 fps option

## [3.3.1] - 2021-08-19

### Changed

-   Fix on render_error deprecation warning

## [3.3.0] - 2021-08-18

### Added

-   Nobot param in renders method
-   API devmode
-   showHitCounter param in newRender method
-   Defaults in API Doc
-   Added error codes 22 & 23

### Changed

-   TS types are now only in 1 file

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

-   Default replay params (rev12)
-   Better errors with error codes (rev12)
-   Better JSdoc

### Deprecated

-   render_error event is deprecated since rev12

### Removed

-   console.log [#1](https://github.com/LockBlock-dev/ordr.js/pull/1)

## [1.0.0] - 2021-06-28

### Added

-   First version
