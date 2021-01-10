require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const accountRouter = require('./routes/api/account');

app.get('/', (req, res) => {
  res.send('Sample Dashboard API');
});

app.use(accountRouter);

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const dbname = process.env.DBNAME;
const port = process.env.PORT || 3000;

const mongoURI = `mongodb+srv://${username}:${password}@sample-dashboard.kolop.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => console.log('connected to db'))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log('listening on 3000');
});
