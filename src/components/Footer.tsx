
import { Camera, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/images/LionKidzLogo.png" 
                alt="Lion Kidz Photography" 
                className="h-8 w-auto"
              />
              <span className="font-alegreya text-2xl text-white font-bold">
                Lion Kidz Photography
              </span>
            </div>
            <p className="font-alegreya text-gray-300 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/p/Lion-Kidz-Photography-100095060533230/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-pink hover:text-brand-lime transition-colors"
                aria-label="Follow us on Facebook"
              >
                <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center hover:bg-brand-lime transition-colors">
                  <Facebook className="text-white" size={18} />
                </div>
              </a>
              <a 
                href="https://www.instagram.com/dino_alexandre24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-pink hover:text-brand-lime transition-colors"
                aria-label="Follow us on Instagram"
              >
                <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center hover:bg-brand-lime transition-colors">
                  <Instagram className="text-white" size={18} />
                </div>
              </a>
              <a 
                href="https://www.tiktok.com/@lionkidz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-pink hover:text-brand-lime transition-colors"
                aria-label="Follow us on TikTok"
              >
                <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center hover:bg-brand-lime transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-alegreya text-xl text-brand-lime mb-4 font-bold">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 font-alegreya">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-brand-lime transition-colors">
                  {t('nav.home')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="text-gray-300 hover:text-brand-lime transition-colors">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-300 hover:text-brand-lime transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-brand-lime transition-colors">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-300 hover:text-brand-lime transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-alegreya text-xl text-brand-lime mb-4 font-bold">Get in Touch</h3>
            <div className="space-y-3 font-alegreya">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-pink" />
                <a href="tel:+230-5281-8488" className="text-gray-300 hover:text-brand-lime transition-colors">
                  +230 5281 8488
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-pink" />
                <a href="mailto:Lionkidz636@gmail.com" className="text-gray-300 hover:text-brand-lime transition-colors">
                  Lionkidz636@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-pink mt-1" />
                <span className="text-gray-300">
                  Royal Road, Malakoff, Mauritius
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Business Hours: Mon-Sat 9AM-6PM (Mauritius Time)
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="font-alegreya text-gray-400 text-sm">
              © 2024 Lion Kidz Photography. All rights reserved.
            </p>
            <p className="font-alegreya text-gray-400 text-sm">
              Made by <span className="text-brand-lime font-semibold">Blyndex</span>
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <NavLink to="/privacy" className="font-alegreya text-gray-400 hover:text-brand-lime text-sm transition-colors">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="font-alegreya text-gray-400 hover:text-brand-lime text-sm transition-colors">
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
