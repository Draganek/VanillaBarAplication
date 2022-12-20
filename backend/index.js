const express = require('express');
const app = express();
const port = 6969;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test', (req, res) => {
    res.send('Hello Test!');
});

app.get('/login', (req, res) => {
    const test = req.query.arg1;
    res.send(test);
});

app.listen(port, () => {
    console.log(`Pierwszy serwer koxowy na porcie: ${port}`)
});