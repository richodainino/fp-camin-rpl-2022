const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
    },
    description: {
        type: String,
        required: false,
    },
    price: {
        type: String,
        required: [true, "Please add a price"],
    },
    image: {
        type: String,
        required: [true, "Please add a image"],
    },
});

module.exports = mongoose.model("Product", productSchema);
