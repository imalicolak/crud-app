// Router is what we use in controllers to route -> easy to export all of the routes in the file
const express = require('express');
const router  = express.Router();

router.get('/music', (req, res) => {
    res.send('<h1> My list of music </h1>')
})

module.exports = router;