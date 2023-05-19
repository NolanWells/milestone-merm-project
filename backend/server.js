const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')

const movies = require('./controller/movies_controller')




//middleware   
// Have Node serve the files for our built React app
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
})

app.use('/movies', movies)

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
})