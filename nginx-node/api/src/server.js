const express = require('express');

const routes = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/people', routes.people);

app.listen(80)