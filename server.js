const express = require('express')// defining  express package for use
const app = express();// blueprint of express or instances of express
const db=require('./db');  // import db.js
require('dotenv').config(); //importing .env file
const passport=require('./auth');//importing auth.js

const bodyParser=require('body-parser');//importing body parser
app.use(bodyParser.json());// parse the json and store at req.body
const PORT=process.env.PORT || 3000;// to access .env file we use process.env.var_name

//middleware function
const logRequest=(req,res,next) => {
  console.log(`[${new Date().toLocaleString()}] Request made to: ${req.originalUrl}`);
  next();//move to next phase
}
app.use(logRequest);// it define middleware for every routes

app.use(passport.initialize());//to  use passport
const localAuthMidleware=passport.authenticate('local',{session:false});//inseritng authentication 

app.get('/',function (req, res) {//inserting authentication using local Strategy
  res.send('welcome to our hotel')
});

// app.post('/person',(req,res)=>{
//     res.send("data is saved");
// })

//import personroute and menuitem route file
const personRoutes=require('./routes/personRoutes');
const menuitemRoute=require('./routes/menuItemRoutes');

//use personroute and menuitem route
app.use('/person',localAuthMidleware,personRoutes);
app.use('/menu',menuitemRoute);


app.listen(PORT,()=>{
  console.log("listening server");
})//port number