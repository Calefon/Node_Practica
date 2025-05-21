import express, {Request, Response} from "express";
import mainRouter from "./routes/main-routes";
import config from "./config/config";

const HOST = "127.0.0.1";

const app = express();

app.use("/api",mainRouter);

app.listen(config.port,  HOST, () => {
    console.log(`Server running on http://${HOST}:${config.port}`)
});