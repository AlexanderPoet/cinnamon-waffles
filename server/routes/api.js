const express = require('express');
const router = express.Router();
const path = require('path');
const public = path.join(__dirname, '../../public/bundle.js');

router.route('/')
  .get((req, res) => {
    res.status(200).send('oy');
  });

module.exports = router;