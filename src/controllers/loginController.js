"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const login = (req, res, next) => {
    res.status(200);
    res.send("<h1>Estás en el Login!!!</h1>");
};
exports.login = login;
