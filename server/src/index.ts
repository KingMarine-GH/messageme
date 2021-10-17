import * as dotenv from "dotenv";

dotenv.config();

import * as express from "express"

export const app = express()

app.listen(process.env.EXPRESS_PORT);

app.get("/", (req, res) => {
    res.sendFile("/website/public/index.html", {root: "."});
});