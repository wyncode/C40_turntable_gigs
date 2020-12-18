require('./db/config');
const express = require('express'),
  path = require('path'),
  morgan = require('morgan'),
  gigRouter = require('./routes/secure/gigPost'),
  gigApplicationRouter = require('./routes/secure/gigApplication'),
  openPostsRouter = require('./routes/open/gigPost'),
  openProfilesRouter = require('./routes/open/profile'),
  userRouter = require('./routes/secure/users'),
  bookingRouter = require('./routes/secure/bookings'),
  chatsRouter = require('./routes/secure/chats'),
  openRoutes = require('./routes/open');

const app = express();

//Middleware
app.use(express.json());
app.use(morgan('dev'));

// Unauthenticated routes
app.use(openRoutes);
app.use('/api/search/profiles', openProfilesRouter);
app.use('/api/search/gigs', openPostsRouter);

// Authenticated Routes

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
app.use('/api/gigs', gigRouter);
app.use('/api/application', gigApplicationRouter);

// Any authentication middleware and related routing would be here.

app.use('/api/users', userRouter);
app.use('/api/bookings', bookingRouter);
// app.use('/api/chats', chatsRouter);

// app.use('/api/profiles', profilesRouter);

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

module.exports = app;
