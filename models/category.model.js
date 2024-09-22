let mongoose = require("mongoose");

let categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    }
})


let category = mongoose.model("categorySchema",categorySchema)

module.exports = category