
const Product=require('../models/products')

const getAllProducts=async(req,res)=>{
    const myData=await Product.find({}) // finds all data 
    res.status(200).json({myData})

}

const getAllProductsTesting=async(req,res)=>{
    const data=await Product.find({name:'iphone'})
    res.status(200).json({data})
}

module.exports={getAllProducts,getAllProductsTesting}
