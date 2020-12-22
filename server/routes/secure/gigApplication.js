const router = require('express').Router(),
  {
    createGigApplication,
    deleteGigApplication,
    getGigApplication,
    updateGigApplication,
    getAllGigApplications
  } = require('../../controllers/gigApplication');

router.get('/', getAllGigApplications);
router.get('/:id', getGigApplication);
router.post('/', createGigApplication);
router.delete('/:id', deleteGigApplication);
router.patch('/:id', updateGigApplication);

module.exports = router;
