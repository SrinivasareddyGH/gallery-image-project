const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageController");
const upload = require("../middleware/uploadMiddleware");

router.post("/upload", upload.single("image"), imageController.uploadImage);
router.get("/", imageController.getImages);
router.get("/:id", imageController.getImageById);
router.delete("/:id", imageController.deleteImage);

module.exports = router;
