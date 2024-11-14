const express =require( 'express')
const route =express.Route();

const {authSession} =require('../Middalwer/auth');
const {cteatblod, getblog,readoneblog, updatetblog, deletblog}=require ('../Controller/Blog');
const {upload} = require('../Middalwer/aplodeimg');



route.get('/create',authSession, upload.single("image"),cteatblod)
route.get("/getalldata",getblog);
route.get("/getone/:id",readoneblog)
route.put("/update/:id",updatet.single("image"),updatetblog)
route.delete("/delete/:id",deletblog)





module.exports =route;

 

