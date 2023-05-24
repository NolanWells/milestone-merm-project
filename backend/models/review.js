const mongoose = require('mongoose')
 
const reviewSchema = new mongoose.Schema({
    // name: {type: String, required: true},
    comment: {type: String, default: ''},
    rating: {type: Number, },
    // movie_ID: {type: Number, required: true},
})

module.exports = mongoose.model('reviewSchema',reviewSchema)