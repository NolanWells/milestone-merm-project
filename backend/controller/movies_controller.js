const express = require('express')
const router = express.Router()
const reviewSchema = require('../models/review')
const bodyParser = require('body-parser');


// middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


//this is to send reviews from other users about the selected movie on the details page
router.get('/id/:movie_id', async (req ,res) => {
    console.log('axios made it to the backend!!!!!');
    try{
        const movie_id = req.params.movie_id
        const reviews = await reviewSchema.find({ movie_id }).exec();
        res.json(reviews)
    }catch(err) {
        return res.status(500).json({ error: 'Internal Server Error' })
    }
})


router.get('/', (req, res) => {
    res.json({
        message: 'this is the movies controller'
    })
})
// /movies
router.post('/', (req, res) => {
    // movie_id=23131&comment=hi&rating=1

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