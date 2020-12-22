const router = require('express').Router(),
  {
    createProfile,
    deleteProfile,
    updateProfile
  } = require('../../controllers/profiles');

router.post('/', createProfile);
router.delete('/delete', deleteProfile);
router.patch('/update', updateProfile);
module.exports = router;
