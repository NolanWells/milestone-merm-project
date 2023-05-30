// Modules and Globals
require('dotenv').config()

const cool = require('cool-ascii-faces')
const express = require('express')
const app = express()
const methodOverride = require('method-override')

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


// Controllers & Routes
// app.use('/pages', require('./controller/pages'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// HEROKU TEST - IGNORE / DELETE IF YOU WANT TO
.get('/times', (req, res) => res.send(showTimes()))

function showTimes() {
    const times = process.env.TIMES || 5
    let result = ''
    for (i =0; i < times; i++) {
        result += I + ' '
    }
    return result
}

// Listen for Connections
app.listen(process.env.PORT)