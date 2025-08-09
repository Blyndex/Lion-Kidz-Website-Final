
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PortfolioCollage = () => {
  const { t } = useTranslation();
  
  const portfolioImages = [
    {
      url: "/images/portfolio/FriendsAndLifestyle/Lor1.jpg",
      alt: "Lifestyle Photography",
      size: "large"
    },
    {
      url: "/images/portfolio/Families/Mel4.jpg",  
      alt: "Family Photography",
      size: "medium"
    },
    {
      url: "/images/hero/73ee2530-86c8-4ac9-a56d-43f499aa5545.webp",
      alt: "Portrait Photography",
      size: "tall"
    },
    {
      url: "/images/portfolio/Families/42ca09a4-54e9-46e3-ad5a-ccf250fcc1a0.webp",
      alt: "Family Session",
      size: "medium"
    },
    {
      url: "/images/portfolio/Families/Int4.JPG",
      alt: "Family Photography",
      size: "medium"
    },
    {
      url: "/images/hero/7765ae10-90f3-42cf-8f41-50d650c14d0a.png",
      alt: "Nature Photography",
      size: "wide"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-alegreya text-4xl md:text-5xl text-white mb-6 font-bold">
            {t('portfolio.title')} <span className="text-brand-lime">{t('portfolio.titleHighlight')}</span>
          </h2>
          <p className="font-alegreya text-xl text-gray-300 max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Improved masonry-style grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto">
          {/* Large hero image */}
          <div className="col-span-2 md:col-span-2 group">
            <div
              className="relative overflow-hidden rounded-2xl cursor-pointer h-64 md:h-80 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url(${portfolioImages[0].url})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="font-alegreya text-lg font-semibold">{portfolioImages[0].alt}</h3>
              </div>
            </div>
          </div>
          
          {/* Tall image */}
          <div className="col-span-1 md:col-span-1 group">
            <div
              className="relative overflow-hidden rounded-2xl cursor-pointer h-64 md:h-80 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url(${portfolioImages[1].url})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-300" />
            </div>
          </div>
          
          {/* Medium image */}
          <div className="col-span-1 md:col-span-1 group">
            <div
              className="relative overflow-hidden rounded-2xl cursor-pointer h-64 md:h-80 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url(${portfolioImages[2].url})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-300" />
            </div>
          </div>

          {/* Second row */}
          <div className="col-span-1 md:col-span-1 group">
            <div
              className="relative overflow-hidden rounded-2xl cursor-pointer h-48 md:h-56 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url(${portfolioImages[3].url})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-300" />
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-1 group">
            <div
              className="relative overflow-hidden rounded-2xl cursor-pointer h-48 md:h-56 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url(${portfolioImages[4].url})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-300" />
            </div>
          </div>
          
          {/* Wide image */}
          <div className="col-span-2 md:col-span-2 group">
            <div
              className="relative overflow-hidden rounded-2xl cursor-pointer h-48 md:h-56 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url(${portfolioImages[5].url})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-300" />
            </div>
          </div>
        </div>

        <div className="text-center">
          <NavLink
            to="/portfolio"
            className="bg-brand-pink text-white px-8 py-4 rounded-full font-alegreya font-bold text-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2"
          >
            <span>{t('portfolio.viewFullPortfolio')}</span>
            <ArrowRight className="h-5 w-5" />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCollage;
