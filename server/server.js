const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db.js");
const imageRoutes = require("./routes/imageRoutes.js");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/images", imageRoutes);
app.get("/",(req , res) =>
{
res.json({message:"hi from server"});
})
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
