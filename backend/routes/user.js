const router = require("express").Router();
const userController = require("../controllers/user");
const authMiddleware = require("../middlewares/authorization");
// const isUserExist = require("../middleware/isUserExist");

router.post("/signup", userController.creatUser);
router.post("/login", userController.signin);

router.put("/user", authMiddleware, userController.updateUser);
router.get("/user", userController.getUserById);
// router.delete("/user/:id", authMiddleware, isUserExist, userController.deleteUserById)

module.exports = router;
