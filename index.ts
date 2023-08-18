import dotenv from 'dotenv';
dotenv.config();

import cool from 'cool-ascii-faces';
import express, { Request, Response } from 'express';
const app = express();
import methodOverride from 'method-override';

// Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Controllers & Routes
// app.use('/pages', require('./controller/pages'));

app.get('/', (req: Request, res: Response) => {
    res.render('home');
});

app.get('*', (req: Request, res: Response) => {
    res.render('error404');
});

// Listen for Connections
app.listen(process.env.PORT);