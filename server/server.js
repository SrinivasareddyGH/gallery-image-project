// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const connectDB = require("./config/db.js");
// const imageRoutes = require("./routes/imageRoutes.js");
// const dotenv = require("dotenv");
// const app = express();

// dotenv.config();

// // Connect to database
// connectDB();
// // Middleware
// app.use(cors());
// app.use(express.json());

// // Static folder
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Routes
// app.use("/api/images", imageRoutes);
// app.get("/",(req , res) =>
// {
// res.json({message:"hi from server"});
// })
// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });




// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const imageRoutes = require("./routes/imageRoutes");
require("dotenv").config();

const app = express();

// DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/images", imageRoutes);

// Serve frontend
const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname1, "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
