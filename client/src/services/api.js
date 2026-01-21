import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

// Upload image
export const uploadImage = async (formData) => {
  const response = await api.post("/images/upload", formData);
  return response.data;
};

// Get all images
export const getImages = async () => {
  const response = await api.get("/images");
  return response.data;
};

// Get single image
export const getImageById = async (id) => {
  const response = await api.get(`/images/${id}`);
  return response.data;
};

// Delete image
export const deleteImage = async (id) => {
  const response = await api.delete(`/images/${id}`);
  return response.data;
};
