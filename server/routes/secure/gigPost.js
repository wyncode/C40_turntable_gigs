const router = require('express').Router(),
  {
    createGigPost,
    deleteGigPost,
    updateGigPost
  } = require('../../controllers/gigPosts');
// venueRole = require('../../middleware/authorization/index');

router.post('/', createGigPost); //venueRole(),
router.delete('/:id', deleteGigPost); //venueRole(),
router.patch('/:id', updateGigPost); //venueRole(),

module.exports = router;
