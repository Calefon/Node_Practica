"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_routes_1 = __importDefault(require("./routes/main-routes"));
const config_1 = __importDefault(require("./config/config"));
const HOST = "127.0.0.1";
const app = (0, express_1.default)();
app.use("/api", main_routes_1.default);
app.listen(config_1.default.port, HOST, () => {
    console.log(`Server running on http://${HOST}:${config_1.default.port}`);
});
