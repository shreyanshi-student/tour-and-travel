const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage(); // keep file in memory
const upload = multer({ storage });

const { registerUser, loginUser, getUsers, updateUser, deleteUser } = require("../controllers/authController");
const offerController = require('../controllers/offerController');
const blogController = require('../controllers/blogController');
const teamController = require('../controllers/teamontroller');

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

router.get('/blog', blogController.getBlogs);
router.get('/blog/:id', blogController.getBlogById);
router.post('/blog', blogController.createBlog);
router.put('/blog/:id', blogController.updateBlog);
router.delete('/blog/:id', blogController.deleteBlog);

router.get('/blog', teamController.getTeamMembers);
router.get('/blog/:id', teamController.getTeamMemberById);
router.post('/blog', teamController.createTeamMember);
router.put('/blog/:id', teamController.updateTeamMember);
router.delete('/blog/:id', teamController.deleteTeamMember);

module.exports = router;
