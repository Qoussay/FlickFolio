const express = require('express');
const mainRouter = require('./app/routers/index');

const app = express();

// Parse request bodies as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', mainRouter);

module.exports = app;