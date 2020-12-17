const GigPost = require('../db/models/gigPost');

exports.createGigPost = async (req, res) => {
  const gigPost = new GigPost(req.body);

  gigPost.save(function (err, doc) {
    if (err) return res.status(400).send(err);
    res.send(doc);
  });
};

exports.getGigPost = async (req, res) => {
  GigPost.findById(req.params.id, function (err, gigPost) {
    if (!gigPost) return res.status(404).send(err);
    if (err) return res.status(400).send();
    res.json(gigPost);
  });
};

exports.updateGigPost = async (req, res) => {
  GigPost.findById(req.params.id, function (err, gigPost) {
    if (err) return res.send(err);
    // gigPost.text = req.body.text
    gigPost.location = req.body.location;
    gigPost.timeframe = req.body.timeframe;
    gigPost.equipment = req.body.equipment;
    gigPost.pay = req.body.pay;
    gigPost.description = req.body.description;
    gigPost.genre = req.body.genre;
    gigPost.photos = req.body.photos;
    gigPost.timestamps = req.body.timestamps;

    console.log(gigPost);

    gigPost.save(function (err, gigPost) {
      if (err) res.send(err);
      res.json(gigPost);
    });
  });
};

exports.deleteGigPost = async (req, res) => {
  GigPost.findByIdAndRemove(req.params.id, function (err, gigPost) {
    if (err) res.send(err);
    res.json(gigPost);
  });
};
