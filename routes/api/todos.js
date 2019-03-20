const express = require('express');
const router = express.Router();

// @route  GET api/posts/test
// @desc   Tests todos route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Todos Works' }));

module.exports = router;
