const mongoose =require('mongoose')


const uri='mongodb+srv://raunakkumar445:raunak445@testing.b9yclg5.mongodb.net/?retryWrites=true&w=majority'
const connectDB=()=>{
    console.log("Database Connected")
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
}

module.exports=connectDB

require('dotenv').config()

// const mongoose = require("mongoose");

// module.exports = () => {
 
// 	const connectionParams = {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	};
// 	try {
// 		mongoose.connect(process.env.MONGODB_URL, connectionParams);
// 		console.log("Connected to database successfully");
// 	} catch (error) {
// 		console.log(error);
// 		console.log("Could not connect database!");
// 	}
// };
