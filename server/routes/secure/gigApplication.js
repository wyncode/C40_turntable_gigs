const router = require('express').Router(),
  {
    createGigApplication,
    deleteGigApplication,
    getGigApplication,
    updateGigApplication
  } = require('../../controllers/gigApplication');

router.get('/:id', getGigApplication); //open route//
router.post('', createGigApplication); //Keep in secure//
router.delete('/:id', deleteGigApplication); //Keep in secure//
router.patch('/:id', updateGigApplication); //Keep in secure//

module.exports = router;
