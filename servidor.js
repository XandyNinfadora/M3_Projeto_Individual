const express = require ('express');
const app = express();
const jsonServer = require ('json-server');
const servidor = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8081;

servidor.use (middlewares);
servidor.use (router);
servidor.listen(port);