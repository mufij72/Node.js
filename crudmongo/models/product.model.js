const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, 'please entet product name'],
        },
        quantity: {
            type: Number,
            require: true,
            default: 0
        },
        price: {
            type: Number,
            require: true,
            default: 0
        },
        imagr: {
            type: String,
            require: false

        },
    },
    {
        Timestamp: true,
    }
);

const product = mongoose.model("Product", ProductSchema);
module.exports = product;





// const mongoose = require('mongoose');

// const ProductSchema = mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: [true, 'Please enter product name'],  // Fixed 'require' to 'required'
//         },
//         quantity: {
//             type: Number,
//             required: true,  // Fixed 'require' to 'required'
//             default: 0
//         },
//         price: {
//             type: Number,
//             required: true,  // Fixed 'require' to 'required'
//             default: 0
//         },
//         image: {  // Fixed 'imagr' to 'image'
//             type: String,
//             required: false
//         },
//     },
//     {
//         timestamps: true,  // Fixed 'Timestamp' to 'timestamps'
//     }
// );

// const Product = mongoose.model("Product", ProductSchema);  // Model should be capitalized
// module.exports = Product;
