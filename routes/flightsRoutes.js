const flightsControllers = require('./../controllers/flightsControllers');

app.get('/flights', flightsControllers.getFlights);
app.get('/new-flight', flightsControllers.getNewFlight);
app.post('/flights', flightsControllers.postFlight);


module.exports = function(app) {
    app.get('/flights', flightsControllers.getFlights);
    app.get('/new-flight', flightsControllers.getNewFlight);
    app.post('/flights', flightsControllers.postFlight);
    // Other routes...
};