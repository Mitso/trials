"use strict";
const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname + '/profile.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
