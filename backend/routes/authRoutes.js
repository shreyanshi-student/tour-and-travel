const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage(); // keep file in memory
const upload = multer({ storage });

const { registerUser, loginUser, getUsers, updateUser, deleteUser } = require("../controllers/authController");

router.post("/users/register", upload.single("image"), registerUser);
router.post("/user/login", loginUser);
router.get("/users", getUsers);
router.put("/users/:id", upload.single("image"), updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
