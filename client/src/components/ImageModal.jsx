import { useEffect } from 'react';

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!image) return null;

  return (
    // Overlay Background
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4 transition-opacity"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="bg-white rounded-xl shadow-xl max-w-3xl w-full p-6 relative flex flex-col max-h-screen overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold p-2 focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Content */}
        <div className="flex flex-col items-center">
            {/* Full Image */}
          <img
            src={`http://localhost:5000/${image.path}`}
            alt={image.title}
            className="w-full max-h-[70vh] object-contain rounded-lg mb-4 bg-gray-50"
          />

          {/* Metadata Section */}
          <div className="w-full mt-4 space-y-2 text-left">
            <h2 className="text-lg font-semibold text-gray-800">{image.title}</h2>
            
            {image.description && (
                <p className="text-sm text-gray-600 leading-relaxed">
                {image.description}
                </p>
            )}

            {/* Tags Container */}
            <div className="flex flex-wrap gap-2 mt-2">
              {image.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
            
            <div className="pt-4 text-xs text-gray-400">
                Uploaded on {new Date(image.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
