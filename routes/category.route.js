let express = require("express");
const { categoryController } = require("../controllers");
const { verifyToken, isAdmin } = require("../middleware/verifyToken");

let route = express.Router();

route.post("/create", verifyToken, isAdmin, categoryController.post_category);
route.get("/get", verifyToken, categoryController.get_category);
route.delete("/delete/:id", verifyToken, isAdmin, categoryController.delete_category);
route.put("/update/:id", verifyToken, isAdmin, categoryController.update_category)

module.exports = route