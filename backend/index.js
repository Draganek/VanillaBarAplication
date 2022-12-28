const { json, urlencoded } = require('express');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 6969;

app.use(cors());
app.use(json());
app.use(urlencoded({
    extended: true
}));

app.get('/*', (_, res) => {
    res.send('Nothing interesting here!');
});

app.get('/login', (req, res) => {
    const { username, password } = req.query;
    if (!username || !password) {
        res.send(false);
        return;
    }
    try {
        const usersFile = fs.readFileSync('users.json', 'utf-8');
        const users = JSON.parse(usersFile);
        const user = users.find(user => user.username === username && user.password === password)
        res.send(user ? true : false);
    } catch (err) {
        console.error(`Error reading list of users from a file ${err}`);
        res.send(false);
    }
});

app.post('/register', (req, res) => {
    const { username, password, price } = req.body;
    if (!username || !password) {
        res.send(false);
        return;
    }
    try {
        const usersFile = fs.readFileSync('users.json', 'utf-8');
        const users = JSON.parse(usersFile);
        const isUsernameTaken = users.find(user => user.username === username);
        if (isUsernameTaken) {
            res.send(false);
            return;
        }
        const newUser = {
            username,
            password
        };
        if (price) {
            newUser.price = price;
        }
        users.push(newUser);
        fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
        res.send(true);
    } catch (err) {
        console.error(`Error writing user into the list of users file: ${err}`);
        res.send(false);
    }
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});