const express = require('express');
const mongoose = require('mongoose'); 
const app = express();
require('dotenv').config();
const route = require("./Src/Route/User");
const  movieRoute=require("./Src/Route/Movis")
const Blogroute =require('./Src/Route/Blog')
const session = require('express-session')
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(session({
    secret: process.env.SECRET_KEY || "defaultsecret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  
}));





app.use('/', route);

// movie project 
// app.use('/movis',movieRoute);

// app.User('blog',Blogroute)

mongoose.connect("mongodb://localhost:27017/e-commrs")
    .then(() => console.log('Connected to MongoDB...'))
    .catch((error) => console.error('Could not connect to MongoDB:', error));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
