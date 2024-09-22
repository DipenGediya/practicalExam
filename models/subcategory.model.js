let mongoose = require("mongoose");

let subcategorySchema = new mongoose.Schema({
    subName: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"categorySchema"
    }
})

let subcategory = mongoose.model("subcategorySchema", subcategorySchema)

module.exports = subcategory