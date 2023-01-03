const Router = require('express');
const produtosRoutes = require('./produtosRoutes')
const pedidosRoutes = require('./pedidosRoutes')

const routes = Router();

routes.use(produtosRoutes);
routes.use(pedidosRoutes);


module.exports = routes;



