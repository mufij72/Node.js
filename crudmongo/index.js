const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const producroute = require('./routes/productroute.js')
// const product = require('./models/product.model.js');
const app = express();
const port = 4500;


// middlwer
app.use(express.json());
app.use(express.urlencoded({ extended: false }))



// routes
app.use("/api/products", producroute)

app.get('/', (req, res) => {
    res.send('hello from node api');
});



app.listen(port, () => {
    const uri = "mongodb://localhost:27017/e-commrs";
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })  // Added connection options
        .then(() => {
            console.log("connected to database");
        })
        .catch((error) => {
            console.log("connection failed", error);
        });

    console.log(`Server is running on port ${port}`);
});
