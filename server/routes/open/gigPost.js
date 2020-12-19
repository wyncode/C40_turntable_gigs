const router = require('express').Router(),
  { getGigPost } = require('../../controllers/gigPosts');

router.get('/:id', getGigPost);
// router.get('/', getAllGigPosts);

module.exports = router;
