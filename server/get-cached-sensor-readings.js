const getSensorReadings = require('./get-sensor-readings');

// Instantiate the cache.  For now, just a simple variable 
// stored in memory
const cache = {
    temperature: null,
    humidity: null
}

// Run a function to get the sensor readings every two seconds,
// which is the same rate (interval) as our sensor.
setInterval(() => {
    getSensorReadings((err, temperature, humidity) => {
        if (err) {
            return(console.error(err));
        }
        cache.temperature = temperature;
        cache.humidity = humidity;
    })
}, 2000)

// The functions that we expose only return the cached values
// and don't make a call to the sensor interface every time
module.exports.getTemperature = () => cache.temperature;
module.exports.getHumidity = () => cache.humidity;
