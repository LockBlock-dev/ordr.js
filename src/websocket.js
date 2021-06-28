const WS = require("ws")
const EventEmitter = require("events")

exports.WebSocket = class WebSocket extends EventEmitter {

    constructor(gateway) {
       super()
       this.gateway = gateway
    }

    #parseWS(event) {
        var first, op, data
        first = Math.min(event.indexOf("{") == -1 ? 100 : event.indexOf("{"), event.indexOf("[") == -1 ? 100 : event.indexOf("["))
        op = parseInt(event.slice(0, first))
        event = JSON.parse(event.slice(first))
        data = Array.isArray(event) ? Object.fromEntries([event]) : event
        data.op = op
        return data
    }

    start() {
        const ws = new WS(this.gateway)

        ws.on('open', function open() {
            ws.send(40)
            //console.log("Sent:", 40)
        })

        ws.on('message', function incoming(event) {
            var data = {}
            //console.log("Event:", event)
            if (event.includes("{") || event.includes("[")) {
                data = this.#parseWS(event)
            } else {
                data.op = parseInt(event)
            }
           
            //console.log("Received:", data)
            switch (data.op) {
                case 40:
                    //console.log("Connected!\nReceived:", 40)
                case 2:
                    ws.send(3)
                    //console.log("Sent:", 3)
                    break
                case 42:
                    switch (Object.keys(data)[0]) {
                        case "render_done":
                            this.emit("render_done", data)
                            break
                        case "render_progress":
                            this.emit("render_progress", data)
                            break
                        case "render_added":
                            this.emit("render_added", data)
                            break
                        case "render_error":
                            this.emit("render_error", data)
                            break
                    }
                    break
            }
        }.bind(this))
    }
}