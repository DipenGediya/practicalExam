let express = require("express");
let userRoute = require("./user.route")
let categoryRoute = require("./category.route")
let subcategoryRoute = require("./subcategory.route")
let productRoute = require("./product.route")
let addCartRoute = require("./addCart.route")

let routes = express.Router();

routes.use("/user",userRoute);
routes.use("/category",categoryRoute);
routes.use("/subcategory",subcategoryRoute);
routes.use("/product",productRoute)
routes.use("/cart",addCartRoute)

module.exports = routes