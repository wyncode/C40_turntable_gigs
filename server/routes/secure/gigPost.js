const router = require('express').Router(),
  {
    createGigPost,
    deleteGigPost,
    updateGigPost
  } = require('../../controllers/gigPosts');

router.post('/', createGigPost);
router.delete('/:id', deleteGigPost);
router.patch('/:id', updateGigPost);

module.exports = router;
