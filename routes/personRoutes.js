const express=require('express');
const router=express.Router();//using router method
const Person=require('./../models/Person');//import models named Person.js

router.post('/',async(req,res)=>{
    try{
        const data=req.body//assuming request body contain data
  
         //creating newPerson document using Mongoose model (Person)
          const newPerson= new Person(data);
  
        //save the new person in database
        const response=await newPerson.save();
        console.log("saved data");
        res.status(200).json(response);
    }
    catch(err){
      console.log("error",err);
      res.status(500).json({error:"internal server error"});
      }
  });
  
  //GET method to get person information from database
  router.get('/',async (req,res)=>{
    try{
      const data=await Person.find();
      console.log("data fetched or get");
      res.status(200).json(data);
    }catch(err){
      console.log("error",err);
      res.status(500).json({error:"internal server error"});
    }
  });
  
  //paramaterized API
  router.get('/:worktype',async(req,res)=>
{
 try{
  const worktype=req.params.worktype;
  if(worktype=='chef' || worktype =='waiter'|| worktype =='manager'){
    const response=await Person.find({work: worktype});
    console.log("response fetch");
    res.status(200).json(response);

  }
  else{
    res.status(404).json({error:'Invalid work type'});
  }
 }catch(err){
  console.log("error",err);
  res.status(500).json({error:"internal server error"});
 }
});

//update
router.put('/:id',async(req,res)=>
{
    try{
        const personId=req.params.id;//extracr the id from url parameter
        const personUpdatedData=req.body;//update data for person

        const response=await Person.findByIdAndUpdate(personId,personUpdatedData,{
            new:true,
            runValidators:true
        });
        if(!response){
            res.status(404).json({error:'Person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);

    }catch(err){
        console.log("error",err);
        res.status(500).json({error:"internal server error"});
    }
});

router.delete('/:id',async (req,res)=>
{
    try{
        const personId=req.params.id;
        const response=await Person.findByIdAndDelete(personId);
        if(!response){
            res.status(404).json({error:'Person not found'});
        }
        console.log('data deleted');
        res.status(200).json({message:"person deleted successfully"});
    }catch(err){
        console.log("error",err);
        res.status(500).json({error:"internal server error"});
    }
})
 
module.exports= router;