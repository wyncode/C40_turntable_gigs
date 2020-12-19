const router = require('express').Router(),
  {
    createProfile,
    uploadBackgroundImage,
    deleteProfile,
    updateProfile
  } = require('../../controllers/profiles');

router.post('/create', createProfile);
router.post('/backgroundimage', uploadBackgroundImage);
router.delete('/delete', deleteProfile);
router.patch('/update', updateProfile);
module.exports = router;
