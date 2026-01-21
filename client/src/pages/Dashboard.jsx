import { useState, useEffect } from 'react';
import { getImages, deleteImage } from '../services/api';
import Gallery from '../components/Gallery';
import ImageModal from '../components/ImageModal';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const data = await getImages();
      setImages(data);
      setFilteredImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        await deleteImage(id);
        const newImages = images.filter((img) => img._id !== id);
        setImages(newImages);
        // setFilteredImages is handled by useEffect when images changes, 
        // but for instant feedback we can also update it if we weren't relying on useEffect for everything.
        // The existing useEffect will handle re-filtering.
      } catch (error) {
        console.error('Error deleting image:', error);
        alert('Failed to delete image');
      }
    }
  };

  useEffect(() => {
    if (!searchQuery) {
      setFilteredImages(images);
      return;
    }

    const lowerCaseQuery = searchQuery.toLowerCase();
    
    // Sort and Filter Logic
    const results = images
      .map(image => {
        let score = 0;
        // High priority: Exact or partial match in Title
        if (image.title && image.title.toLowerCase().includes(lowerCaseQuery)) {
            score += 10;
            if (image.title.toLowerCase() === lowerCaseQuery) score += 5; // Perfect match bonus
        }
        
        // Medium priority: Match in Tags
        if (image.tags && image.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))) {
            score += 5;
        }

        // Low priority: Match in Description (if needed, but not requested to highlight)
        // if (image.description && image.description.toLowerCase().includes(lowerCaseQuery)) score += 1;

        return { ...image, score };
      })
      .filter(item => item.score > 0) // Only keep matches
      .sort((a, b) => b.score - a.score); // Sort by highest score first

    setFilteredImages(results);
  }, [searchQuery, images]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-lg shadow-sm">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
              <p className="text-gray-600">Manage and view your collection</p>
            </div>
            <div className="mt-4 md:mt-0 w-full md:w-1/3 relative">
                <svg className="absolute left-3 top-3 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              <input
                type="text"
                placeholder="Search by title or tags..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Gallery 
            images={filteredImages} 
            onImageClick={setSelectedImage} 
            onDelete={handleDelete}
            searchQuery={searchQuery}
          />
        </div>
      </div>

      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default Dashboard;
