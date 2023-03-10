// Router is what we use in controllers to route -> easy to export all of the routes in the file
const express = require('express');
const router  = express.Router();

router.get('', (req, res) => {
    res.render('songList.ejs')
})

module.exports = router;