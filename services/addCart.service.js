const { addCartSchema } = require("../models")

let post_cart = (body) => {
    return addCartSchema.create(body)
}

let get_cart = () => {
    return addCartSchema.find().populate(["productId"])
}

let findByIdAndDelete = (id) => {
    return addCartSchema.findByIdAndDelete(id)
}

let findByIdAndUpdate = (id, body) => {
    return addCartSchema.findByIdAndUpdate(id, body)
}
module.exports = { post_cart, get_cart, findByIdAndDelete, findByIdAndUpdate }