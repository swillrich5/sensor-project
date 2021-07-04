const express = require('express');

// create an instance of our server application
const app = express();

app.get('/temperature', function(req, res) {
    res.send('24 C');
});

app.get('/humidity', function(req, res) {
    res.send('48%');
});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
})