let express = require("express");
const { userContoller } = require("../controllers");
const { verifyToken, isAdmin } = require("../middleware/verifyToken");

let route = express.Router();

route.post("/register", userContoller.register);
route.post("/login", userContoller.login);
route.get("/get", verifyToken, isAdmin, userContoller.get_user);
route.patch("/updatePassword/:id", userContoller.update_password)


module.exports = route