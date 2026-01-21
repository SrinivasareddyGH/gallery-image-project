import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800 hover:text-gray-600" onClick={closeMenu}>
             GalleryPro
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md font-medium">
              Home
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md font-medium">
              Dashboard
            </Link>
            <Link to="/upload" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              <span>Upload</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-100 animate-fade-in-down">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
            <Link to="/" onClick={closeMenu} className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md font-medium hover:bg-gray-50">
              Home
            </Link>
            <Link to="/dashboard" onClick={closeMenu} className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md font-medium hover:bg-gray-50">
              Dashboard
            </Link>
            <Link to="/upload" onClick={closeMenu} className="block text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors mt-2">
              Upload
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
