const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send("Hello from express new");
});

app.get('/getScore', (req, res) => {
    res.send("230");
});

app.listen(3000);