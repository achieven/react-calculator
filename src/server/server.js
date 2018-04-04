const express = require('express')

const app     = express();

const port    = 3333;

app.listen(port, function () {
    console.log('server is listening on port ', port);
});

app.get('/calculate', function (req, res) {
    res.json({number: Math.random()});
});