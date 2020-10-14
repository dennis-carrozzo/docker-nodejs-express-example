const express = require('express');


const app = express();

const port = process.env.PORT

app.get('/docker', (req, res, next) => { res.send("hello from docker") })

app.get('/nodemon', (req, res) => res.send('hello from nodemon'))

app.get('/', (req, res, next) => { res.send('hello World!') });

app.listen(port, () => console.log(`app listening on port ${port}`));
