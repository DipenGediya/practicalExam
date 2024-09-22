const { categorySchema } = require("../models")

let post_category = (body) => {
    return categorySchema.create(body)
}

let get_category = () => {
    return categorySchema.find()
}

let findByIdAndDelete = (id) => {
    return categorySchema.findByIdAndDelete(id);
}

let findByIdAndUpdate = (id, body) => {
    return categorySchema.findByIdAndUpdate(id, body)
}
module.exports = { post_category, get_category, findByIdAndDelete ,findByIdAndUpdate}
