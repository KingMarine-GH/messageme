import * as dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

import * as express from "express";

export const app = express();

app.listen(<number> <unknown> process.env.EXPRESS_PORT);

app.get("/", (req, res) => {
    res.sendFile("/website/public/index.html", {root: "."});
});

import * as ws from "ws";
export const server = new ws.Server({ port: <number> <unknown> process.env.WS_PORT });

server.once("listening", () => {
    console.log("WebSocket server online in port " + process.env.WS_PORT)
})