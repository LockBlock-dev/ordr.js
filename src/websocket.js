const { WScodes, WSstatus } = require("./constants");
const io = require("socket.io-client");
const EventEmitter = require("events");

var deprecationEmitted = false;

exports.WebSocket = class WebSocket extends EventEmitter {
    constructor(gateway) {
        super();
        this.gateway = gateway;
    }

    start() {
        const socket = io(this.gateway);

        socket.on("connect", () => {
            //console.log(socket.id)
        });

        socket.on("disconnect", (reason) => {
            if (reason === "io server disconnect") {
                // the disconnection was initiated by the server, you need to reconnect manually
                socket.connect();
            }
            // else the socket will automatically try to reconnect
        });

        socket.on("render_done", (data) => {
            this.emit("render_done", { renderID: data });
        });

        socket.on("render_progress", (data) => {
            var splitted = data.split(" ");
            var status = splitted[1];
            var progression = WSstatus[status] || null;
            if (splitted[3]) {
                status = `${splitted[1]} ${splitted[2]} ${splitted[3]}`;
            } else if (splitted[2]) {
                progression = splitted[2];
            }
            this.emit("render_progress", { renderID: splitted[0], status: status, progression: progression });
        });

        socket.on("render_added", (data) => {
            this.emit("render_added", { renderID: data });
        });

        socket.on("render_error", (data) => {
            this.emit("render_error", { renderID: data });
        });

        socket.on("render_failed", (data) => {
            var splitted = data.split(" ");
            this.emit("render_failed", { renderID: splitted[0], code: splitted[1], error: WScodes[splitted[1]] });
        });
    }
};
