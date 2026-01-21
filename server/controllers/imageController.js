const Image = require("../models/Image");
const fs = require("fs");
const path = require("path");

// @desc    Upload an image
// @route   POST /api/images/upload
// @access  Public
exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Please upload an image" });
    }

    const { title, description, tags } = req.body;

    if (!title) {
      // Remove uploaded file if validation fails
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ message: "Title is required" });
    }

    const newImage = new Image({
      filename: req.file.filename,
      path: req.file.path,
      title,
      description,
      tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
    });

    const savedImage = await newImage.save();

    res.status(201).json(savedImage);
  } catch (error) {
    console.error(error);
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Get all images
// @route   GET /api/images
// @access  Public
exports.getImages = async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Get single image
// @route   GET /api/images/:id
// @access  Public
exports.getImageById = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.status(200).json(image);
  } catch (error) {
    console.error(error);
    if (error.kind === "ObjectId") {
      return res.status(404).json({ message: "Image not found" });
    }
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Delete image
// @route   DELETE /api/images/:id
// @access  Public
exports.deleteImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    // Delete file from filesystem
    if (image.path) {
      try {
        const filePath = path.join(__dirname, "..", image.path);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      } catch (fileError) {
        console.error("Error deleting file:", fileError);
        // Continue to delete from DB even if file deletion fails
      }
    }

    await Image.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: "Image removed" });
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
