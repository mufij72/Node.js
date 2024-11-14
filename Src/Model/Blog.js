const mongoose=require('mongoose');
// const User = require('./User');

const blogShema =new mongoose.Schema({

    titel  :{
        type:String,
    },
    content:{
        type:String,
    },
    image:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        require:true
    }
},

{
    timestamps: true 
   });

module.exports =mongoose.model('Blog',blogShema)