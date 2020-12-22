const GigApplication = require('../db/models/gigApplication');

exports.createGigApplication = async (req, res) => {
  const gigApplication = await new GigApplication({
    ...req.body,
    owner: req.user._id
  });
  try {
    gigApplication.save();
    res.status(201).json(gigApplication);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

exports.getGigApplication = async (req, res) => {
  GigApplication.findById(req.params.id, function (err, gigApplication) {
    if (!gigApplication) return res.status(404).send(err);
    if (err) return res.status(400).send();
    res.json(gigApplication);
  });
};

exports.getAllGigApplications = async (req, res) => {
  try {
    GigApplication.find().then((gigApplication) =>
      res.status(200).json(gigApplication)
    );
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

exports.updateGigApplication = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['experience', 'genre', 'equipment', 'musicLink'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: 'Invalid updates!' });
  try {
    const gigApplication = await GigApplication.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!gigApplication)
      return res.status(404).json({ error: 'Application not found' });
    updates.forEach((update) => (gigApplication[update] = req.body[update]));
    await gigApplication.save();
    res.json(gigApplication);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

exports.deleteGigApplication = async (req, res) => {
  try {
    const gigApplication = await GigApplication.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!gigApplication)
      return res.status(404).json({ error: 'Gig application not found' });
    res.json({ message: 'Gig application has been deleted' });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
