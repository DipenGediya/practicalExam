let express = require("express");
const { productController } = require("../controllers");
const upload = require("../middleware/upload");
const { verifyToken, isAdmin } = require("../middleware/verifyToken");

let route = express.Router();

route.post("/create", verifyToken, isAdmin, upload.single("image"), productController.post_product);
route.get("/get", verifyToken,isAdmin, productController.get_product);
route.delete("/delete/:id", verifyToken, isAdmin, productController.delete_product);
route.put("/update/:id", verifyToken, isAdmin, upload.single("image"), productController.update_product)


module.exports = route