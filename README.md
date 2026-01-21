<<<<<<< HEAD
# MERN Image Gallery

A clean, production-ready Image Gallery application built with the MERN stack (MongoDB, Express, React, Node.js).
This project allows users to upload images with metadata (title, description, tags), store them locally, and view them in a responsive gallery.

## Features

- **Upload Images**: Supported formats (JPG, PNG, WEBP) with max size 5MB.
- **Metadata**: Add title, description, and tags to uploads.
- **Gallery**: Responsive grid layout to browse uploaded images.
- **LightBox**: Click on an image to view it in full size with details.
- **Responsive Design**: Built with Tailwind CSS for mobile, tablet, and desktop compatibility.

## Tech Stack

- **Frontend**: React (Vite), Axios, Tailwind CSS
- **Backend**: Node.js, Express, Multer (File Upload), MongoDB (Mongoose)

## Prerequisites

- Node.js installed
- MongoDB installed and running locally

## Setup & Run

### 1. Backend Setup

```bash
cd server
npm install
# Create a .env file if needed (defaults to port 5000 and local mongo)
npm start
```

Server runs on: `http://localhost:5000`

### 2. Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

## API Endpoints

- `POST /api/images/upload`: Upload an image with metadata.
- `GET /api/images`: Fetch all images.
- `GET /api/images/:id`: Fetch a single image by ID.

## Sample Data Usage

Upload images using the UI form. Add comma-separated tags like "nature, travel, sunset".

## Screenshots

_(Placeholder for screenshots)_
=======
# gallery-image-project
>>>>>>> c9a4af76545793b2241d2d11f0ef3952043307cb
