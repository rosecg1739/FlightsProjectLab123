const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const logger = require('morgan');

app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('view engine', 'ejs');
app.set('views', 'views');

const flightsRoutes = require('./routes/flightsRoutes');
app.use(flightsRoutes);

const routes = require('./routes');
app.use('/', routes);


app.listen(port, ()=> console.log(`Listening to port ${port}`));