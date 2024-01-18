const express = require("express");
const app = express();
const products=require('./routes/products')
const connectDB=require('./db/connect')
require('dotenv').config()

app.get("/", (req, res) => res.send("Hi I am live"));

app.use('/api/products',products)

const port=process.env.PORT

const start = async () => {
  try {
    await connectDB()
    app.listen(process.env.PORT, () => console.log(`App listening on port ${port}!`));
  } catch (error) {
    console.log(error);
  }
};

start();
