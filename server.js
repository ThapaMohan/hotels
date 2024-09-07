const express = require('express')// defining  express package for use
const app = express();// blueprint of express or instances of express
const db=require('./db');  // import db.js

const bodyParser=require('body-parser');
app.use(bodyParser.json());// parse the json and store at req.body

app.get('/', function (req, res) {
  res.send('Hello! My name is mohan')
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

app.listen(3000,()=>{
  console.log("listening server");
})//port number