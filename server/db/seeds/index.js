if (process.env.NODE_ENV !== 'production') require('dotenv').config();
require('../config/');

const djs = require('./data');
const User = require('../models/user'),
  faker = require('faker'),
  mongoose = require('mongoose');

const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }

  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });

  const venueIdArray = [];
  const djIdArray = [];

  djs.forEach(async (dj) => {
    const newDj = await new User({
      name: dj.name,
      location: dj.location,
      email: dj.email,
      password: 'superSecret'
    });
    await newDj.generateAuthToken();
    djIdArray.push(dj._id);
  });

  for (let i = 0; i < 100; i++) {
    const venue = new User({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      dj: false,
      email: faker.internet.email(),
      password: 'superSecret'
    });
    await venue.generateAuthToken();
    venueIdArray.push(venue._id);
  }
};

dbReset();
