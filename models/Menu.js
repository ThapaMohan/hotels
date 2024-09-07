const mongoose = require('mongoose');
//defining schema for menu of hotel
const menuItemSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        ingredients:{
            type:[String],
            default:[]
        },
        taste:{
            type:String,
            enum:['spicy','sweet','sour'],
            required:true
        },
       is_drink:{
        type:Boolean,
        default:false
       },
       num_sales:{
        type:Number,
        default:0
       }
});

//create models
const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;