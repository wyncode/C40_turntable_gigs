// require('../config/');

// const djs = require('./data')

// const   User = require('../models/user'),
//   faker = require('faker'),
//   mongoose = require('mongoose');

// const dbReset = async () => {
//   const collections = Object.keys(mongoose.connection.collections);
//   for (const collectionName of collections) {
//     const collection = mongoose.connection.collections[collectionName];
//     await collection.deleteMany();
//   }

//   await User.countDocuments({}, function (err, count) {
//     console.log('Number of users:', count);
//   });
//   await Task.countDocuments({}, function (err, count) {
//     console.log('Number of tasks:', count);
//   });

//   const userIdArray = [];
//   djs.forEach(dj => {
//     name: dj.name,
//     location: dj.location,
//     email: dj.email,
//     password: faker.internet.password()
//   })

//   for (let i = 0; i < 1000; i++) {
//     const me = new User({

//     });
//     await me.generateAuthToken();
//     userIdArray.push(me._id);
//   }

//   for (let i = 0; i < 1000; i++) {
//     const task = new Task({
//       description: faker.lorem.paragraph(),
//       completed: Boolean(Math.round(Math.random())),
//       dueDate: faker.date.future(),
//       owner: userIdArray[Math.floor(Math.random() * userIdArray.length)]
//     });
//     await task.save();
//   }
//   await User.countDocuments({}, function (err, count) {
//     console.log('Number of users:', count);
//   });
//   await Task.countDocuments({}, function (err, count) {
//     console.log('Number of tasks:', count);
//   });
// };

// dbReset();
