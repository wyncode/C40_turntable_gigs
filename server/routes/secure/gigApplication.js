const router = require('express').Router(),
  {
    createGigApplication,
    deleteGigApplication,
    getGigApplication,
    updateGigApplication,
    getAllGigApplications
  } = require('../../controllers/gigApplication'),
  { venueRole } = require('../../middleware/authorization/index'),
  { djRole } = require('../../middleware/authorization/index');

router.get('/', venueRole(), getAllGigApplications);
router.get('/:id', getGigApplication); //venue venueRole(),
router.post('/', djRole(), createGigApplication);
router.delete('/:id', deleteGigApplication); // djRole(),
router.patch('/:id', updateGigApplication); // djRole(),

module.exports = router;
