const router = require('express').Router(),
  {
    createUser,
    loginUser,
    fetchAllUsers,
    fetchAllDjs
  } = require('../../controllers/users');

router.post('/', createUser);
router.post('/login', loginUser);
router.get('/all', fetchAllUsers);
router.get('/djs', fetchAllDjs);

module.exports = router;
