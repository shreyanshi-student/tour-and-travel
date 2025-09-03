const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage(); // keep file in memory
const upload = multer({ storage });

const { registerUser, loginUser, getUsers, updateUser, deleteUser } = require("../controllers/authController");
const offerController = require('../controllers/offerController');

router.post("/users/register", upload.single("image"), registerUser);
router.post("/users/login", loginUser);
router.get("/users", getUsers);
router.put("/users/:id", upload.single("image"), updateUser);
router.delete("/users/:id", deleteUser);

router.get('/offer', offerController.getOffers);
router.get('/offer/:id', offerController.getOfferById);
router.post('/offer', offerController.createOffer);
router.put('/offer/:id', offerController.updateOffer);
router.delete('/offer/:id', offerController.deleteOffer);

module.exports = router;
