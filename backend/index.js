const express = require('express');
const app = express();
const fs = require('fs');
const port = 6969;

app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test', (req, res) => {
    res.send('Hello Test!');
});

app.get('/login', async (req, res) => {
    const { username, password } = req.query;
    try {
        const usersFile = await fs.readFileSync('users.json', 'utf-8');
        const users = JSON.parse(usersFile);
        const user = users.find(user => user.username === username && user.password === password)
        res.send(user ? true : false);
    } catch (err) {
        console.error('Error reading list of users from a file', err);
        res.send(false);
    }
});

app.post('/register', (req, res) => {
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    res.send(req.body);
})

app.listen(port, () => {
    console.log(`Pierwszy serwer koxowy na porcie: ${port}`)
});