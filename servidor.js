const jsonServer = require('json-server')
const servidor = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000;

servidor.use(middlewares)
servidor.use(router)

servidor.listen(port)