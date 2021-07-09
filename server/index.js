const express = require('express');

// Need to create path to index.html below
const path = require('path');

// create an instance of our server application
const app = express();

const getCachedSensorReadings = require('./get-cached-sensor-readings');

// Now getting the temp and humidity from the cached function calls
app.get('/temperature', function(req, res) {
    res.send(getCachedSensorReadings.getTemperature().toFixed(1) + "°F");
});

// initial route for pulling humidity
app.get('/humidity', function(req, res) {
    res.send(getCachedSensorReadings.getHumidity().toFixed(1) + "%");
});

app.use('/public', express.static(path.join(__dirname, 'public')));

// listen for requests on port 3000
// http://localhost:3000/humidity or http://localhost:3000/temperature
app.listen(3000, function() {
    console.log('Server listening on port 3000');
});