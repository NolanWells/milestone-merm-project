const express = require('express')
const router = express.Router()
const reviewSchema = require('../models/review')
const bodyParser = require('body-parser');


// middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/', (req, res) => {
    res.json({
        message: 'this is the movies controller'
    })
})
// /movies
router.post('/', (req, res) => {
    const { review, stars } = req.body;
  
    const newReview = new reviewSchema({
      comment: review,
      rating: stars
    });
  
    newReview.save()
    .then(() => console.log('document has been created'))
    .catch(err =>console.log(err))
   res.redirect('/')
})


module.exports = router