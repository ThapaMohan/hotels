const mongoose=require("mongoose");

//Define the MongoDB connection URL
const mongoURL="mongodb://localhost:27017/hotels";

//define parameters of mongoose and connections start
// mongoose.connect(mongoURL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// });
mongoose.connect('mongodb://localhost:27017/hotels');

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