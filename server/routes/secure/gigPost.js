// const gigPost = require('../../controllers/gigPost');
// const express = require('express');
const router = require('express').Router(),
  {
    createGigPost,
    deleteGigPost,
    getGigPost,
    updateGigPost
  } = require('../../controllers/gigPosts');

router.get('/:id', getGigPost); //open route//
router.post('', createGigPost); //Keep in secure//
router.delete('/:id', deleteGigPost); //Keep in secure//
router.patch('/:id', updateGigPost); //Keep in secure//

module.exports = router;
