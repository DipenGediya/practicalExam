let express = require("express");
const { addCartController } = require("../controllers");

let route = express.Router();

route.post("/create", addCartController.post_cart);
route.get("/get",addCartController.get_cart);
route.delete("/delete/:id",addCartController.delete_cart)
route.put("/update/:id",addCartController.update_cart)

module.exports = route