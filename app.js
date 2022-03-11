const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const products = require('./routes/products.route');
const orders = require('./routes/orders.route');
const config = require('./config');

// Untuk header application/json
app.use(express.json());
// Untuk header application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/products', products);
app.use('/api/v1/orders', orders);

app.get('/', (req, res) => {
  res.status(200).send('Hello world! Check on localhost:5000/api/v1/products');
});

const start = async () => {
  try {
    await connectDB(config.dbUri);
    app.listen(config.port, console.log(`Server is listening on localhost:${config.port}`));
  } catch (error) {
    console.log(error);
  }
};

start();