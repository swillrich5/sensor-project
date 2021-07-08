const express = require('express');

// create an instance of our server application
const app = express();

const getSensorReadings = require('./get-sensor-readings');



// initial route for pulling temperature
app.get('/temperature', function(req, res) {
    getSensorReadings((err, temperature, humidity) => {
        if (!err) {
            res.send(temperature.toFixed(1) + "°F");
        }
    });
});

// initial route for pulling humidity
app.get('/humidity', function(req, res) {
    getSensorReadings((err, temperature, humidity) => {
        if (!err) {
            res.send(humidity.toFixed(1) + "%");
        }
    });
});

// listen for requests on port 3000
// http://localhost:3000/humidity or http://localhost:3000/temperature
app.listen(3000, function() {
    console.log('Server listening on port 3000');
})