const express = require('express')
const router = express.Router()
const reviewSchema = require('../models/review')

router.get('/', (req, res) => {
    res.json({
        message: 'this is the movies controller'
    })
})
// /movies
router.post('/', (req, res) => {
   reviewSchema.create(req.body)
   .then(() => console.log('document has been created'))
   .catch(err =>console.log(err))

})


module.exports = router