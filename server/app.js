require('./db/config');
const express = require('express'),
  path = require('path'),
  morgan = require('morgan'),
  openPostsRouter = require('./routes/open/gigPost'),
  openProfilesRouter = require('./routes/open/profile'),
  openRoutes = require('./routes/open');

const app = express();

//Middleware
app.use(express.json());
app.use(morgan('dev'));

// Unauthenticated routes
app.use(openRoutes);
app.use('/api/search/profiles', openProfilesRouter);
app.use('/api/search/gigs', openPostsRouter);

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Any authentication middleware and related routing would be here.

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
