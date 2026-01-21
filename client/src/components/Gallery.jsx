import ImageCard from './ImageCard';

const Gallery = ({ images, onImageClick, onDelete, searchQuery = '' }) => {
  if (!images || images.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 text-lg">
        {searchQuery ? 'No matches found.' : 'No images found. Start by uploading one!'}
      </div>
    );
  }

  return (
    <div className="space-y-6">
       <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
                {searchQuery ? 'Search Results' : 'Recent Uploads'}
            </h2>
            <span className="text-sm text-gray-500 font-medium">{images.length} items</span>
        </div>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <ImageCard 
            key={image._id} 
            image={image} 
            onClick={onImageClick}
            onDelete={onDelete}
            searchQuery={searchQuery}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
