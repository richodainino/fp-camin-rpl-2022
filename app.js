const express = require('express');
const app = express();
require('dotenv').config();

const connectDB = require('./db/connect');
const accounts = require('./routes/accounts.route');

const port = 5000;

// Untuk header application/json
app.use(express.json());
// Untuk header application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/accounts', accounts);

app.get('/', (req, res) => {
  res.status(200).send('Hello world! Check on localhost:5000/api/v1/accounts');
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is running on localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();