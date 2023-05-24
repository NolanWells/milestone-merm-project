const mongoose = require('mongoose')
 
const reviewSchema = new mongoose.Schema({
    // name: {type: String, required: true},
    comment: {type: String, required: true},
    rating: {type: Number, required: true},
    // movie_ID: {type: Number, required: true},
})

module.exports = mongoose.model('reviewSchema',reviewSchema)