const mongoose=require("mongoose");
require('dotenv').config(); //importing .env file

//Define the MongoDB connection URL
// const mongoURL="mongodb://localhost:27017/hotels";

const mongoURL=process.env.MONGODB_URL;// access .env file

// const mongoURL='mongodb+srv://hotel:Hotel123@hotels.ni4ea.mongodb.net/' // this atlas hosting
//define parameters of mongoose and connections start
// mongoose.connect(mongoURL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// });
mongoose.connect(mongoURL);

//mongose maintain the default connection with MongoDB
const db =mongoose.connection;

//defining events listener
db.on("connected",()=>{
    console.log("connected to mongodb");
});
db.on("disconnected",()=>{
    console.log("disconnected to mongodb");
});
db.on("error",(err)=>{
    console.log("error in connection to mongodb", err);
});

//export the db connnection
module.exports=db;