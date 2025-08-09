
import { ArrowRight, Star, Instagram, Facebook } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from './ui/carousel';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();
  
  const alternatingWords = [
    t('hero.words.memories'),
    t('hero.words.littleLions'),
    t('hero.words.adventures'),
    t('hero.words.preciousMoments'),
    t('hero.words.smiles'),
    t('hero.words.joy')
  ];

  const heroImages = [
    {
      url: "/images/hero/ccfd055c-02e6-4974-8f04-437613285bc6.png",
      alt: "Two people walking through lush tropical foliage"
    },
    {
      url: "/images/hero/7765ae10-90f3-42cf-8f41-50d650c14d0a.png",
      alt: "Beautiful waterfall cascading into turquoise pool surrounded by green vegetation"
    },
    {
      url: "/images/hero/42b93f7e-2f08-4383-b3ef-ba7e34f12dc7.png",
      alt: "Mother holding baby on beach with ocean in background"
    },
    {
      url: "/images/hero/73ee2530-86c8-4ac9-a56d-43f499aa5545.webp",
      alt: "Family moment captured in natural setting"
    },
    {
      url: "/images/hero/42ca09a4-54e9-46e3-ad5a-ccf250fcc1a0.webp",
      alt: "Portrait photography session in beautiful location"
    },
    {
      url: "/images/hero/Lor2.jpg",
      alt: "Professional portrait photography showcasing natural beauty"
    }
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % alternatingWords.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, []);

  // Custom autoplay effect
  useEffect(() => {
    if (!api) return;

    const autoplayInterval = setInterval(() => {
      const nextIndex = (current + 1) % heroImages.length;
      api.scrollTo(nextIndex);
    }, 5000);

    return () => clearInterval(autoplayInterval);
  }, [api, current, heroImages.length]);

  return (
    <section className="relative h-screen overflow-hidden -mt-20 pt-20 bg-gray-900">
      {/* Background Image Carousel - Extended to cover navbar area */}
      <div className="absolute inset-0 z-0">
        <Carousel
          setApi={setApi}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="w-full h-full relative">
                  <img 
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center block"
                    style={{
                      minHeight: '100vh',
                      minWidth: '100vw',
                      display: 'block'
                    }}
                    onLoad={() => {}}
                    onError={() => {}}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-start justify-center pt-16 sm:pt-20 lg:pt-32 pb-0">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-4 sm:mb-6">
            <h1 className="font-alegreya text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-2 leading-tight tracking-wide font-bold">
              {t('hero.capturing')}
            </h1>
            <div className="relative h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20 flex items-center justify-center">
              <span 
                className="font-alegreya text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand-pink absolute transition-all duration-1000 ease-in-out font-bold"
                style={{
                  opacity: 1,
                  transform: 'translateY(0px)'
                }}
                key={currentWord}
              >
                {alternatingWords[currentWord]}
              </span>
            </div>
          </div>
          
          <p className="font-alegreya text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
            {t('hero.description')}
          </p>

          {/* 5-star rating moved below the main sentence */}
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6 lg:mb-8">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 fill-brand-lime text-brand-lime" />
              ))}
            </div>
            <span className="font-alegreya text-xs sm:text-sm text-gray-200">
              {t('hero.rating')}
            </span>
          </div>
          
          <div className="flex flex-col space-y-3 sm:flex-row sm:justify-center sm:items-center sm:space-y-0 sm:space-x-4 md:space-x-6 px-4 sm:px-0">
            <NavLink
              to="/portfolio"
              className="bg-brand-pink text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-alegreya font-bold text-sm sm:text-base lg:text-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>{t('hero.viewPortfolio')}</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            </NavLink>
            
            <NavLink
              to="/contact"
              className="bg-brand-lime text-brand-darkGray px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-alegreya font-bold text-sm sm:text-base lg:text-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-200 flex items-center justify-center shadow-lg"
            >
              {t('hero.bookSession')}
            </NavLink>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center space-x-6 mt-8">
            <a 
              href="https://www.instagram.com/dino_alexandre24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-pink transition-all duration-300 hover:scale-110"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={28} />
            </a>
            <a 
              href="https://www.facebook.com/p/Lion-Kidz-Photography-100095060533230/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-pink transition-all duration-300 hover:scale-110"
              aria-label="Follow us on Facebook"
            >
              <Facebook size={28} />
            </a>
            <a 
              href="https://www.tiktok.com/@lionkidz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-pink transition-all duration-300 hover:scale-110"
              aria-label="Follow us on TikTok"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
