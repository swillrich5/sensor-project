// Import the sendor library
const sensor = require('node-dht-sensor');

// The first argument is the sensor number.  In this case, 11 represensts the DHT11 sensor
// The second argument is the pin number to read from. For this example,
// we have connected the signal pin to pin 4
sensor.read(11, 4, function(err, temperature, humidity) 
{
    // After reading the sensor, we get the temperature and humidity readings
    if (!err) {
        // If there is no error, convert temp to fahrenheit and log the readings to the console
        temperature = (temperature * 1.8) + 32;
        console.log('temp: ' + temperature.toFixed(1) + '  humidity: ' + humidity.toFixed(1) + '%');
    } else {
        console.log('something went wrong :-(');
        console.log(err);
    }
});