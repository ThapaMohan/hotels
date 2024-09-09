const express = require('express')// defining  express package for use
const app = express();// blueprint of express or instances of express
const db=require('./db');  // import db.js
require('dotenv').config(); //importing .env file

const bodyParser=require('body-parser');
app.use(bodyParser.json());// parse the json and store at req.body
const PORT=process.env.PORT || 3000;// to access .env file we use process.env.var_name

app.get('/', function (req, res) {
  res.send('welcome to our hotel')
});

// app.post('/person',(req,res)=>{
//     res.send("data is saved");
// })

//import personroute files
const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);//use personroute

//import menuitem route file
const menuitemRoute=require('./routes/menuItemRoutes');
app.use('/menu',menuitemRoute);


app.listen(PORT,()=>{
  console.log("listening server");
})//port number