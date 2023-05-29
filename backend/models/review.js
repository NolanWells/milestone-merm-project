const mongoose = require('mongoose')
 
const reviewSchema = new mongoose.Schema({
    //this will get the name from the user's account details by default
    // name: {type: String, required: true},
    comment: {type: String, required: true},
    rating: {type: Number, required: true},
    movie_id: {type: Number, required: true}

    //we need to find a way to get the movie_id query in the forum so we an send it.true},
})

module.exports = mongoose.model('reviews', reviewSchema)