'use strict';

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const { DATABASE_URL, PORT } = require('./config');

app.use(morgan('common'));
app.use(express.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    if (req.method === 'OPTIONS') {
        return res.send(204);
    }
    next();
});

app.get('/', (req, res) => res.send('ok'));

app.listen(process.env.PORT || 8080, () => console.log(
	`Your app is listening on port ${process.env.PORT || 8080}`)
);