import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            Gallery<span className="text-blue-600">Pro</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
             Upload, organize, and explore your collection with ease.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link 
              to="/dashboard" 
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Go to Dashboard
            </Link>
            <Link 
              to="/upload" 
              className="px-8 py-4 bg-white text-gray-800 border-2 border-gray-200 text-lg font-semibold rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm hover:shadow-md"
            >
              Upload Image
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="bg-white py-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} GalleryPro. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
