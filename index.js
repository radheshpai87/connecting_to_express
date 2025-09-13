const express = require('express');
require('dotenv').config();
const { resolve } = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 3000 || process.env.port;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.log("Connect to MongoDB Sucessfully!");
}).catch((err) => {
  console.log(`Error connecting to MongoDB ${err}`);
})

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Sever is listening at http://localhost:${port}`);
});
