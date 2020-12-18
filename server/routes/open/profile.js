const router = require('express').Router(),
  {
    getSpecificProfile,
    getAllProfiles
  } = require('../../controllers/profiles');

// router.get('/:id', getSpecificProfile);
// router.get('/', getAllProfiles);

module.exports = router;
