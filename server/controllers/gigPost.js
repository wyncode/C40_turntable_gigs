const gigPost = require('../db/models/gigPost');

exports.createGigPost = async (req, res) => {
  var gigPost = new GigPost(req.body);

  gigPost.save(function (err, doc) {
    if (err) return res.status(400).send(err);
    res.send(doc);
  });
};

exports.getGigPost = async (req, res) => {
  gigPost.findById(req.params.id, function (err, gigPost) {
    if (!gigPost) return res.status(404).send(err);
    if (err) return res.status(400).send();
    res.json(gigPost);
  });
};

exports.updateGigPost = async (req, res) => {
  gigPost.findById(req.params.id, function (err, gigPost) {
    if (err) return res.send(err);
    gigPost.text = req.body.text;

    gigPost.save(function (err, gigPost) {
      if (err) res.send(err);
      res.json(gigPost);
    });
  });
};

exports.deleteGigPost = async (req, res) => {
  Post.findByIdAndRemove(req.params.id, function (err, gigPost) {
    if (err) res.send(err);
    res.json(gigPost);
  });
};

module.exports = {
  createGigPost,
  getGigPost,
  updateGigPost,
  deleteGigPost
};
