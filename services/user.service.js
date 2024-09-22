const { userSchema } = require("../models")

let post_user = (body) => {
    return userSchema.create(body)
}

let findUser = (email) => {
    return userSchema.findOne({ email })
}

let get_user = () => {
    return userSchema.find()
}

let findByIdAndUpdate = (id, body) => {
    return userSchema.findByIdAndUpdate(id, body)
}

module.exports = { post_user, findUser, get_user ,findByIdAndUpdate}