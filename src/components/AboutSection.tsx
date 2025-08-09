
import { Camera, Heart, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const alexImages = [
    {
      src: "/images/about/alex7.jpg",
      alt: "Alex - Professional Photographer"
    },
    {
      src: "/images/about/alex5.jpg", 
      alt: "Alex - Photography Session"
    },
    {
      src: "/images/about/alex4.webp",
      alt: "Alex - Portrait Photography"
    },
    {
      src: "/images/about/alex6.jpg",
      alt: "Alex - Photography Work"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % alexImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [alexImages.length]);
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-brand-pink" />
              <span className="font-alegreya text-brand-pink font-medium text-sm sm:text-base">{t('about.aboutMe')}</span>
            </div>
            <h2 className="font-alegreya text-2xl sm:text-3xl md:text-4xl text-brand-darkGray mb-4 sm:mb-6 font-bold leading-tight">
              {t('about.welcomeTitle')} <span className="inline-block bg-gradient-to-r from-brand-pink to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-alegreya font-bold shadow-lg transform hover:scale-105 transition-all duration-200 text-xl sm:text-2xl md:text-3xl">{t('about.companyName')}</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 font-alegreya text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                {t('about.description1')}
              </p>
              <p>
                {t('about.description2')}
              </p>
              <p>
                {t('about.description3')}
              </p>
            </div>
            
            <div className="flex items-center space-x-3 mt-4 sm:mt-6 mb-6 sm:mb-8">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-brand-lime" />
              <span className="font-alegreya text-gray-600 text-sm sm:text-base">
                {t('about.location')}
              </span>
            </div>

            <NavLink
              to="/about"
              className="bg-brand-pink text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-alegreya font-bold text-base sm:text-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>{t('about.learnMore')}</span>
            </NavLink>
          </div>
          
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative rounded-3xl shadow-2xl w-full h-80 sm:h-96 lg:h-[500px] overflow-hidden">
              {alexImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    objectPosition: image.src.includes('alex6.jpg') ? 'center top' : 'center'
                  }}
                />
              ))}
            </div>
            <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-brand-lime rounded-2xl p-4 sm:p-6 text-brand-darkGray">
              <div className="font-alegreya text-xl sm:text-2xl font-bold">{t('about.since')}</div>
              <div className="font-alegreya text-sm sm:text-base">{t('about.capturingMemories')}</div>
            </div>
            <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 bg-brand-pink rounded-2xl p-3 sm:p-4 text-white">
              <Camera className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
