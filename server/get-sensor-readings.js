// Import the sendor library
const sensor = require('node-dht-sensor');



// We abstract away the functionality to read sensor
// information inside the getSensorReadings funtion.
// This function is also asynchronous.  It accepts a 
// callback function as an argument.

const getSensorReadings = (callback) => {
    sensor.read(11, 4, function(err, temperature, humidity) 
    {
        // If there's an error, call the callback function with
        // the error as its first argument
        if (err) {
            return callback(err);
        } else {
            // If everything went well, call the callback with "null"
            // as the first argument to indicate there was no error.
            // The 2nd and 3rd aruments would be the temperature 
            // and humidity resprectively.
            temperature = (temperature * 1.8) + 32;
            callback(null, temperature, humidity);

        }
    });
}

// Finally, export the function so that it can be used by other
// parts of our code
module.exports = getSensorReadings;