const router = require('express').Router(),
  { createUser, loginUser, fetchAllUsers } = require('../../controllers/users');

router.post('/', createUser);
router.post('/login', loginUser);
router.get('/all', fetchAllUsers);

module.exports = router;
