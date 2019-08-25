const express = require('express');

const { getEvents } = require('./controllers');

const app = express().get('/events', getEvents);

module.exports = app;
