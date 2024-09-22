const { productSchema } = require("../models")

let post_product = (body) => {
    return productSchema.create(body)
}

let get_product = () => {
    return productSchema.find().populate(["categoryId", "subcategoryId"])
}

let findByIdAndDelete = (id) => {
    return productSchema.findByIdAndDelete(id)
}

let findByIdAndUpdate = (id, body) => {
    return productSchema.findByIdAndUpdate(id, body)
}
module.exports = { post_product, get_product, findByIdAndDelete, findByIdAndUpdate }