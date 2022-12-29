require("dotenv").config()

const express = require ('express');
const app = express();
const morgan = require('morgan');
const routes = require('./routes')
const db = require('./service/db')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(morgan('dev'));
app.use(express.urlencoded({ extend: true }));
app.use(express.json());


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/v1', routes);

db().then(() => app.listen(3000)).catch((err) => console.log(err))

module.exports = app;

// 11