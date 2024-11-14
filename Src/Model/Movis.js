const mongoose =require('mongoose');

const moviSchema =new mongoose.Schema({
    fullname:{
        type :String,
    },
    director: {
        type: String
    },
    cast: {
        type: String
    },
    genres: {
        type: String
    },
    language: {
        type: String
    },
    rating: {
        type: Number,
    }
});
module.exports= mongoose.model("Movimodel",moviSchema)