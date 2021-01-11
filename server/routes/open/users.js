const router = require('express').Router(),
  {
    createUser,
    loginUser,
    fetchAllUsers,
    fetchAllDjs,
    fetchAllVenues
  } = require('../../controllers/users');

router.post('/', createUser);
router.post('/login', loginUser);
router.get('/all', fetchAllUsers);
router.get('/djs', fetchAllDjs);
router.get('/venues', fetchAllVenues);

module.exports = router;
