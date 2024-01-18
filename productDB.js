require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/products");
const ProductJson = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.create(ProductJson); // note this is model
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();

// this file is not connected to app.js in any way hence this is to be run directly
