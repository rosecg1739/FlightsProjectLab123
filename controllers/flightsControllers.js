

const Flight = require('./../models');

exports.getFlight = (req, res) => {
    Flight.findById(req.params.id, (err, flight) => {
        if (err) {
            console.log(err);
        } else {
            Ticket.find({ flight: flight._id }, (err, tickets) => {
                if (err) {
                    console.log(err);
                } else {
                    res.render('flight', { flight: flight, tickets: tickets });
                }
            });
        }
    });
};

exports.getNewFlight = (req, res) => {
    res.render('newFlight');
};

exports.postFlight = (req, res) => {
    let newFlight = new Flight({
        airline: req.body.airline,
        airport: req.body.airport,
        flightNo: req.body.flightNo,
        departs: new Date(req.body.departs)
    });
    newFlight.save(err => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/flights');
        }
    });
};
exports.postDestination = (req, res) => {
    Flight.findById(req.params.id, (err, flight) => {
        if (err) {
            console.log(err);
        } else {
            flight.destinations.push({
                airport: req.body.airport,
                arrival: new Date(req.body.arrival)
            });
            flight.save(err => {
                if (err) {
                    console.log(err);
                } else {
                    res.redirect(`/flights/${req.params.id}`);
                }
            });
        }
    });
};

exports.newTicket = (req, res) => {
    res.render('tickets/new', { flightId: req.params.id });
};

exports.createTicket = (req, res) => {
    req.body.flight = req.params.id;
    Ticket.create(req.body, (err, ticket) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect(`/flights/${req.params.id}`);
        }
    });
};