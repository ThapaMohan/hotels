const express=require('express');
const router=express.Router();
const MenuItem=require('./../models/Menu');//import models named Menu.js

//POST method for menu
router.post('/',async(req,res)=>{
    try{
        const menuData=req.body;
        const newMenuData= new MenuItem(menuData);
        const respond=await newMenuData.save();
        console.log("saved data");
        res.status(200).json(respond);
    }
    catch(err){
      console.log("error",err);
      res.status(500).json({error:"internal server error"});
      }
  });
  
  //GET method for menu
  router.get('/',async (req,res)=>{
    try{
      const menuData=await MenuItem.find();
      console.log("data fetched or get");
      res.status(200).json(menuData);
    }catch(err){
      console.log("error",err);
      res.status(500).json({error:"internal server error"});
    }
  });

  router.get('/:tasteType',async (req,res)=>{
    try{
      const tasteType=req.params.tasteType;
      if(tasteType=='spicy'|| tasteType=='sweet'|| tasteType=='sour')
      {
        const response=await MenuItem.find({taste: tasteType});
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

module.exports=router;