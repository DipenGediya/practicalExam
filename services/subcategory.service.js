const { subcategorySchema } = require("../models")

let post_subcategory = (body) => {
    return subcategorySchema.create(body)
}

let get_subcategory = () => {
    return subcategorySchema.find().populate(["categoryId"])
}

let findByIdAndDelete = (id) => {
    return subcategorySchema.findByIdAndDelete(id)
}

let findByIdAndUpdate = (id, body) => {
    return subcategorySchema.findByIdAndUpdate(id, body)
}

module.exports = { post_subcategory, get_subcategory, findByIdAndDelete, findByIdAndUpdate }