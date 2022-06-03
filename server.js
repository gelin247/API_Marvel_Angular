const express = require('express');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

app.use(express.static(__dirname + '/dist/angular-api'));

app.get('/public', (req, res) => {
    res.send(API_KEY);
});


app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/angular-api/index.html');
});

app.listen(PORT, () => {
    console.log(API_KEY);
    console.log(API_URL);
    console.log(`Server listening on port ${PORT}`);
})