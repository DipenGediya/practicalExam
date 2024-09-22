let express = require("express");
const { subcategoryController } = require("../controllers");
const { verifyToken, isAdmin } = require("../middleware/verifyToken");

let route = express.Router();

route.post("/create", subcategoryController.post_subcategory);
route.get("/get", subcategoryController.get_subcategory);
route.delete("/delete/:id", verifyToken, isAdmin, subcategoryController.delete_subcategory);
route.put("/update/:id", verifyToken, isAdmin, subcategoryController.update_subcategory)

module.exports = route