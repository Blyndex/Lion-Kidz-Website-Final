
import { useState, useEffect } from 'react';
import { Menu, X, Camera, Instagram, Facebook } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navigationItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.portfolio'), path: '/portfolio' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.about'), path: '/about' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Check if current page should have dark header
  const isDarkPage = ['/portfolio', '/services', '/about', '/contact'].includes(location.pathname);

  return (
    <header className={`shadow-lg sticky top-0 z-50 border-b ${
      isDarkPage || isMenuOpen
        ? 'border-gray-700 bg-gray-900/95 backdrop-blur-sm' 
        : 'border-gray-800/30 bg-transparent backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Language Selector */}
          <div className="flex items-center space-x-4">
            <NavLink to="/" className="flex items-center">
              <img 
                src="/images/LionKidzLogo.png" 
                alt="Lion Kidz Photography" 
                className="h-10 w-auto"
              />
            </NavLink>
            <LanguageSelector />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-alegreya font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-brand-pink border-b-2 border-brand-pink'
                      : 'text-gray-300 hover:text-brand-pink'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            
            <NavLink
              to="/contact"
              className="bg-brand-lime text-brand-darkGray px-6 py-2 rounded-full font-alegreya font-bold hover:bg-opacity-90 transition-all duration-200 hover:scale-105"
            >
              {t('nav.contact')}
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-brand-pink transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700 bg-gray-800 rounded-lg shadow-xl relative z-50 backdrop-blur-sm">
            <nav className="bg-gray-800 rounded-lg">
              <div className="flex flex-col space-y-4 pt-4 px-4 bg-gray-800 rounded-lg">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-alegreya font-medium py-2 transition-colors duration-200 ${
                      isActive
                        ? 'text-brand-pink border-l-4 border-brand-pink pl-4'
                        : 'text-gray-300 hover:text-brand-pink pl-4'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-brand-lime text-brand-darkGray px-6 py-3 rounded-full font-alegreya font-bold text-center mx-4 hover:bg-opacity-90 transition-all duration-200"
              >
                {t('nav.contact')}
              </NavLink>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
