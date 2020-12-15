// const gigPost = require('../../controllers/gigPost');
// const express = require('express');
const router = require('express').Router(),
  {
    createGigPost,
    deleteGigPost,
    getGigPost,
    updateGigPost
  } = require('../../controllers/gigPost');

router.post('/api/gigPosts', createGigPost);
router.delete('/api/gigPosts', deleteGigPost);
router.route('/api/gigPosts', getGigPost);
router.put('/api/gigPosts', updateGigPost);

module.exports = router;
