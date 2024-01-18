const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: Date
});

const flightSchema = new mongoose.Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);