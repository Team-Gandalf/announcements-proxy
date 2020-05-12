const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const bodyParser = require('body-parser');


app.use(express.static(`${__dirname}/../public`));

// << PROXY SERVER CODE >>

// SET UP A PROXY FOR THE ANNOUNCEMENTS APP
const announcementsProxy = createProxyMiddleware({
  target: 'http://localhost:8080',
  changeOrigin: true,
});

// USE THE PROXY FOR THE ANNOUNCEMENT APP AT A CERTAIN ENDPOINT
app.use(
  '/randomGame',
  announcementsProxy);

app.use(
  '/updateLikes',
  announcementsProxy);

app.use(bodyParser.json()); // THIS NEEDS TO BE HERE AT THE END

module.exports = app;