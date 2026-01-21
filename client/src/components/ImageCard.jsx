import { HighlightText } from './HighlightText';

const ImageCard = ({ image, onClick, onDelete, searchQuery = '' }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 group relative"
      onClick={() => onClick(image)}
    >
      {/* Image Thumbnail */}
      <img
        src={`http://localhost:5000/${image.path}`}
        alt={image.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      
      {/* Delete Button (Visible on Hover / Group Hover) */}
      <button
        onClick={(e) => onDelete(e, image._id)}
        className="absolute top-2 right-2 bg-red-600 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-700 shadow-sm z-10"
        title="Delete image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
      
      {/* Metadata Container */}
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-semibold text-gray-800 truncate" title={image.title}>
          <HighlightText text={image.title} highlight={searchQuery} />
        </h3>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {image.tags.length > 0 ? (
            image.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                <HighlightText text={tag} highlight={searchQuery} />
              </span>
            ))
          ) : (
             <span className="text-xs text-gray-400">No tags</span>
          )}
           {image.tags.length > 3 && (
            <span className="text-xs text-gray-500 self-center">+{image.tags.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
