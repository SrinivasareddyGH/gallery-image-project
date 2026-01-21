import { useNavigate } from 'react-router-dom';
import UploadForm from '../components/UploadForm';
import Navbar from '../components/Navbar';

const UploadPage = () => {
  const navigate = useNavigate();

  const handleUploadSuccess = () => {
    // Navigate to dashboard after successful upload to see the new image
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Upload New Image</h1>
            <p className="text-gray-600 mt-2">Add to your visual collection</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <UploadForm onUploadSuccess={handleUploadSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
