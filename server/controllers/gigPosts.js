const GigPost = require('../db/models/gigPost');

exports.createGigPost = async (req, res) => {
  const gigPost = await new GigPost({
    ...req.body,
    owner: req.user._id
  });
  try {
    gigPost.save();
    res.status(201).json(gigPost);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

exports.getGigPost = async (req, res) => {
  GigPost.findById(req.params.id, function (err, gigPost) {
    if (!gigPost) return res.status(404).send(err);
    if (err) return res.status(400).send();
    res.json(gigPost);
  });
};

exports.getAllGigPosts = async (req, res) => {
  try {
    GigPost.find().then((gigPost) => res.status(200).json(gigPost));
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

exports.updateGigPost = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'location',
    'timeframe',
    'equipment',
    'pay',
    'description',
    'genre',
    'photos'
  ];

  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: 'Invalid updates!' });
  try {
    const gigPost = await GigPost.findOne({
      _id: req.params.id
    });
    if (!gigPost) return res.status(404).json({ error: 'Post not found' });
    updates.forEach((update) => (gigPost[update] = req.body[update]));
    await gigPost.save();
    res.json(gigPost);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

exports.deleteGigPost = async (req, res) => {
  try {
    const gigPost = await GigPost.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!gigPost) return res.status(404).json({ error: 'Gig Post not found' });
    res.json({ message: 'Gig Post has been deleted' });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
