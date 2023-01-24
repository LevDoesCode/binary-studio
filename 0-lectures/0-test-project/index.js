// Express
const express = require('express');
const app = express();

// parse application/json (for all routes), middlewares
app.use(express.json());

//  parse x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    console.log(req.query)
    res.send('hello world');
});

app.put('/test', function (req, res) {
    console.log(req.body);
    res.send('hello world PUT');
});

app.listen(3000);
