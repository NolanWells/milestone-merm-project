const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: { type: string, required: true},
    
})


module.exports = mongoose