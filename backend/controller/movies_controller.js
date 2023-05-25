const express = require('express')
const router = express.Router()
const reviewSchema = require('../models/review')
const bodyParser = require('body-parser');


// middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//this is to send reviews from other users about the selected movie on the details page
router.get('/:movie_id', (req ,res) => {
    console.log('axios made the request to the back end');
    reviewSchema.find().where(movie_id).equals(req.params.movie_id)
    //execute will execute the code above
    .exec((err, reviews) => { 
        if (err) {
          // Handle the error
          return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(reviews)
    })
})


router.get('/', (req, res) => {
    res.json({
        message: 'this is the movies controller'
    })
})
// /movies
router.post('/', (req, res) => {
    console.log(req.body);
    const { comment, rating, movie_id } = req.body;

    const newReview = new reviewSchema({
      comment: comment,
      rating: rating,
      movie_id: movie_id,
    });
  
    newReview.save()
    .then(() => console.log('document has been created'))
    .catch(err =>console.log(err))
   res.redirect('/')
})


module.exports = router