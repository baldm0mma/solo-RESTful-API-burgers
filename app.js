const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/burgers', (req, res) => res.send('It\'s burger time!!!!'));

app.listen(PORT, () => console.log('App is running!'));
