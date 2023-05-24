const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        message: 'this is the movies controller'
    })
})
// /movies
router.post('/', (req, res) => {
    console.log('the post request is working');
})


module.exports = router