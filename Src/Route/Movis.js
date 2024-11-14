const express =require("express");
const route =express.Route();

const {creatdata,reddataall} =require("../Controller/Movis");
const authSession = require("../Middalwer/auth");


route.post('/creatdata',creatdata)
route.get('/redalldata',reddataall ,authSession)
module.exports= route;