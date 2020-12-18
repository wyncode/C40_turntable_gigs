const { GigApplication } = require('../db/models/gigApplication');

exports.createGigApplication = async (req, res) => {
  const gigApplication = new GigApplication(req.body);
  // TODO add request.user to gigApplication owner attribute//
  gigApplication.save(function (err, doc) {
    if (err) return res.status(400).send(err);
    res.json(doc);
  });
};

exports.getGigApplication = async (req, res) => {
  GigApplication.findById(req.params.id, function (err, gigApplication) {
    if (!gigApplication) return res.status(404).send(err);
    if (err) return res.status(400).send();
    res.json(gigApplication);
  });
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
      _id: req.params.id
      // TODO remove comment out when we add owner in gigApplication controller   owner: req.user._id
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
  GigApplication.findByIdAndRemove(req.params.id, function (
    err,
    gigApplication
  ) {
    if (err) res.send(err);
    res.json(gigApplication);
  });
};
