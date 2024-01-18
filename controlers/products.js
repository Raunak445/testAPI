const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  const { company, name,sort,select } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }


  let apiData=Product.find(queryObject) // finds all data

  if(sort){
    let sortFix=sort.split(',').join(' ') 
    apiData.sort(sortFix)
  }
  if(select){
    let selectFix=select.split(',').join(' ')
    apiData.select(selectFix)
  }

  let page=Number(req.query.page) || 1
  let limit=Number(req.query.limit) || 3

  let skip=(page-1)*limit;

  apiData=apiData.skip(skip).limit(limit)


  const myData=await apiData;

 
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  const data = await Product.find(req.query);
  res.status(200).json({ data });
};
module.exports = { getAllProducts, getAllProductsTesting };
