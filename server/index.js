const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const bodyParser = require('body-parser');


app.use(express.static(`${__dirname}/../public`));

// << PROXY SERVER CODE >>

// SET UP A PROXY FOR EACH APP

// << Announcements App >>
const announcementsProxy = createProxyMiddleware({
  target: 'http://3.17.138.9:8080/',
  changeOrigin: true,
});

// << Sidebar App >>
const sidebarProxy = createProxyMiddleware({
  target: 'http://52.14.114.30:1992/',
  changeOrigin: true,
});

// << Media App >>
const mediaProxy = createProxyMiddleware({
  target: 'http://3.23.132.230:8000/',
  changeOrigin: true,
});

// << Reviews App >>
const reviewsProxy = createProxyMiddleware({
  target: 'http://54.67.101.150:4200/',
  changeOrigin: true,
});

// USE THE PROXY FOR THE ANNOUNCEMENT APP AT A CERTAIN ENDPOINT
app.use(
  '/randomGame',
  announcementsProxy);

app.use(
  '/getGame',
  announcementsProxy);

app.use(
  '/updateLikes',
  announcementsProxy);

// << SIDEBAR PROXY >>
app.use(
  '/mainBody',
  sidebarProxy);

// << SIDEBAR PROXY >>
app.use(
  '/media',
  mediaProxy);

// << SIDEBAR PROXY >>
app.use(
  '/api/reviews/',
  reviewsProxy);

app.use(bodyParser.json()); // THIS NEEDS TO BE HERE AT THE END

module.exports = app;