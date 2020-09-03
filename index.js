const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ bye : 'buddy'});
});

app.listen(5000);