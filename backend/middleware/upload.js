// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// // Folder path
// const uploadFolder = path.join(__dirname, "../uploads");

// // Create folder if it doesn't exist
// if (!fs.existsSync(uploadFolder)) {
//   fs.mkdirSync(uploadFolder, { recursive: true });
// }

// // Multer storage config
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadFolder);
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // unique filename
//   },
// });

// const upload = multer({ storage });

// module.exports = upload;

const multer = require("multer");

const storage = multer.memoryStorage(); // keep in memory first
const upload = multer({ storage });

module.exports = upload;
