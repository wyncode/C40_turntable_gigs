const mongoose = require('mongoose'),
  Task = require('../db/models/profile');

// ***********************************************//
// Create a profile
// ***********************************************//
exports.createProfile = async (req, res) => {
  const profile = await new Profile({
    ...req.body,
    owner: req.user._id
  });
  try {
    profile.save();
    res.status(201).json(profile);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ***********************************************//
// Get a specific task
// ***********************************************//
exports.getSpecificProfile = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).send('Not a valid user');

  try {
    const task = await Profile.findOne({ _id, owner: req.user._id });
    if (!profile) return res.status(404).send();

    res.json(profile);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

// ***********************************************//
// Get all tasks
// /tasks?completed=true
// /tasks?limit=10&skip=10
// /tasks?sortBy=createdAt:asc
// /tasks?sortBy=dueDate:desc
// ***********************************************//
exports.getAllProfiles = async (req, res) => {
  const match = {},
    sort = {};

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(':');
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
  }
  try {
    await req.user
      .populate({
        path: 'tasks',
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort
        }
      })
      .execPopulate();
    res.json(req.user.tasks);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
