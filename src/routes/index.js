const Router = require('express');
const produtosRoutes = require('./produtosRoutes')

const routes = Router();

routes.use(produtosRoutes);


module.exports = routes;



