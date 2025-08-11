
import { useState } from 'react';
import { Camera, Filter, Grid3X3, LayoutGrid, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import MetaTags from '../components/SEO/MetaTags';
import BackLink from '../components/BackLink';
import { getPortfolioStructuredData } from '../components/SEO/StructuredData';

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const structuredData = getPortfolioStructuredData();

  const filters = [
    { id: 'all', name: 'All Work' },
    { id: 'portraits', name: 'Portraits' },
    { id: 'friendsAndLifestyle', name: 'Friends & Lifestyle' },
    { id: 'families', name: 'Families' },
    { id: 'natureAndLandscapes', name: 'Nature & Landscapes' }
  ];

  const portfolioItems = [
    // Portraits - All 9 images
    {
      id: 1,
      category: 'portraits',
      title: 'Portrait Photoshoot',
      image: '/images/portfolio/Portraits/Ryan1.jpg',
      alt: 'Professional portrait photography in Mauritius'
    },
    {
      id: 2,
      category: 'portraits',
      title: 'Portrait Session',
      image: '/images/portfolio/Portraits/Lor2.jpg',
      alt: 'Elegant portrait photography showcasing natural beauty'
    },
    {
      id: 3,
      category: 'portraits',
      title: 'Portrait Photography',
      image: '/images/portfolio/Portraits/Jay2.jpg',
      alt: 'Classic portrait photography with timeless appeal'
    },
    {
      id: 4,
      category: 'portraits',
      title: 'Portrait Collection',
      image: '/images/portfolio/Portraits/Ryan2.jpg',
      alt: 'Portrait photography excellence in Mauritius'
    },
    {
      id: 5,
      category: 'portraits',
      title: 'Portrait Session',
      image: '/images/portfolio/Portraits/Ryan3.jpg',
      alt: 'Artistic portrait photography'
    },
    {
      id: 6,
      category: 'portraits',
      title: 'Portrait Photoshoot',
      image: '/images/portfolio/Portraits/Lor3.jpg',
      alt: 'Natural beauty portrait photography'
    },
    {
      id: 7,
      category: 'portraits',
      title: 'Portrait Photography',
      image: '/images/portfolio/Portraits/photo_13_2025-07-02_19-29-01.jpg',
      alt: 'Portrait collection photography'
    },
    {
      id: 8,
      category: 'portraits',
      title: 'Portrait Session',
      image: '/images/portfolio/Portraits/photo_24_2025-07-02_19-29-01.jpg',
      alt: 'Portrait artistry photography'
    },
    {
      id: 9,
      category: 'portraits',
      title: 'Portrait Collection',
      image: '/images/portfolio/Portraits/Int3.JPG',
      alt: 'Professional portrait photography'
    },
    // Friends & Lifestyle - All 5 images
    {
      id: 10,
      category: 'friendsAndLifestyle',
      title: 'Lifestyle Photoshoot',
      image: '/images/portfolio/FriendsAndLifestyle/Jay1.jpg',
      alt: 'Friends and lifestyle photography capturing natural moments'
    },
    {
      id: 11,
      category: 'friendsAndLifestyle',
      title: 'Friends Session',
      image: '/images/portfolio/FriendsAndLifestyle/Lor1.jpg',
      alt: 'Lifestyle photography showcasing authentic moments'
    },
    {
      id: 12,
      category: 'friendsAndLifestyle',
      title: 'Lifestyle Photography',
      image: '/images/portfolio/FriendsAndLifestyle/Jay3.jpg',
      alt: 'Friends photography capturing genuine connections'
    },
    {
      id: 13,
      category: 'friendsAndLifestyle',
      title: 'Friends Photoshoot',
      image: '/images/portfolio/FriendsAndLifestyle/ccfd055c-02e6-4974-8f04-437613285bc6.png',
      alt: 'Lifestyle moments photography'
    },
    {
      id: 14,
      category: 'friendsAndLifestyle',
      title: 'Lifestyle Session',
      image: '/images/portfolio/FriendsAndLifestyle/73ee2530-86c8-4ac9-a56d-43f499aa5545.webp',
      alt: 'Friends and lifestyle photography'
    },
    // Families - All 9 images
    {
      id: 15,
      category: 'families',
      title: 'Family Photoshoot',
      image: '/images/portfolio/Families/Mel1.jpg',
      alt: 'Beautiful family portrait photography in Mauritius'
    },
    {
      id: 16,
      category: 'families',
      title: 'Family Session',
      image: '/images/portfolio/Families/Mel3.jpg',
      alt: 'Family photography capturing love and connection'
    },
    {
      id: 17,
      category: 'families',
      title: 'Family Photography',
      image: '/images/portfolio/Families/Mel4.jpg',
      alt: 'Family moments captured through professional photography'
    },
    {
      id: 18,
      category: 'families',
      title: 'Family Collection',
      image: '/images/portfolio/Families/Mel2.jpg',
      alt: 'Family photography session'
    },
    {
      id: 19,
      category: 'families',
      title: 'Family Session',
      image: '/images/portfolio/Families/10.jpg',
      alt: 'Family collection photography'
    },
    {
      id: 20,
      category: 'families',
      title: 'Family Photoshoot',
      image: '/images/portfolio/Families/42ca09a4-54e9-46e3-ad5a-ccf250fcc1a0.webp',
      alt: 'Family portrait photography'
    },
    {
      id: 21,
      category: 'families',
      title: 'Family Photography',
      image: '/images/portfolio/Families/Int1.JPG',
      alt: 'Family photography excellence'
    },
    {
      id: 22,
      category: 'families',
      title: 'Family Session',
      image: '/images/portfolio/Families/Int2.JPG',
      alt: 'Family photography artistry'
    },
    {
      id: 23,
      category: 'families',
      title: 'Family Collection',
      image: '/images/portfolio/Families/Int4.JPG',
      alt: 'Family photography session'
    },
    // Nature & Landscapes - All 12 images
    {
      id: 24,
      category: 'natureAndLandscapes',
      title: 'Landscape Photography',
      image: '/images/portfolio/NatureAndLandscapes/photo_1_2025-07-02_19-29-01.jpg',
      alt: 'Mauritius nature and landscape photography'
    },
    {
      id: 25,
      category: 'natureAndLandscapes',
      title: 'Nature Session',
      image: '/images/portfolio/NatureAndLandscapes/photo_3_2025-07-02_19-29-01.jpg',
      alt: 'Tropical landscape photography in Mauritius'
    },
    {
      id: 26,
      category: 'natureAndLandscapes',
      title: 'Landscape Collection',
      image: '/images/portfolio/NatureAndLandscapes/photo_5_2025-07-02_19-29-01.jpg',
      alt: 'Natural beauty photography showcasing Mauritius landscapes'
    },
    {
      id: 27,
      category: 'natureAndLandscapes',
      title: 'Nature Photography',
      image: '/images/portfolio/NatureAndLandscapes/photo_2_2025-07-02_19-29-01.jpg',
      alt: 'Landscape photography in Mauritius'
    },
    {
      id: 28,
      category: 'natureAndLandscapes',
      title: 'Landscape Session',
      image: '/images/portfolio/NatureAndLandscapes/photo_4_2025-07-02_19-29-01.jpg',
      alt: 'Nature collection photography'
    },
    {
      id: 29,
      category: 'natureAndLandscapes',
      title: 'Nature Collection',
      image: '/images/portfolio/NatureAndLandscapes/photo_6_2025-07-02_19-29-01.jpg',
      alt: 'Tropical beauty photography'
    },
    {
      id: 30,
      category: 'natureAndLandscapes',
      title: 'Landscape Photoshoot',
      image: '/images/portfolio/NatureAndLandscapes/photo_7_2025-07-02_19-29-01.jpg',
      alt: 'Natural landscape photography'
    },
    {
      id: 31,
      category: 'natureAndLandscapes',
      title: 'Nature Session',
      image: '/images/portfolio/NatureAndLandscapes/photo_8_2025-07-02_19-29-01.jpg',
      alt: 'Mauritius landscape photography'
    },
    {
      id: 32,
      category: 'natureAndLandscapes',
      title: 'Landscape Photography',
      image: '/images/portfolio/NatureAndLandscapes/photo_9_2025-07-02_19-29-01.jpg',
      alt: 'Nature photography in Mauritius'
    },
    {
      id: 33,
      category: 'natureAndLandscapes',
      title: 'Nature Collection',
      image: '/images/portfolio/NatureAndLandscapes/photo_10_2025-07-02_19-29-01.jpg',
      alt: 'Landscape artistry photography'
    },
    {
      id: 34,
      category: 'natureAndLandscapes',
      title: 'Landscape Session',
      image: '/images/portfolio/NatureAndLandscapes/photo_11_2025-07-02_19-29-01.jpg',
      alt: 'Natural excellence photography'
    },
    {
      id: 35,
      category: 'natureAndLandscapes',
      title: 'Nature Photography',
      image: '/images/portfolio/NatureAndLandscapes/photo_12_2025-07-02_19-29-01.jpg',
      alt: 'Tropical nature photography'
    },
    {
      id: 36,
      category: 'natureAndLandscapes',
      title: 'Landscape Collection',
      image: '/images/portfolio/NatureAndLandscapes/a9dec9b1-5c13-4471-9532-b688b08f9573.webp',
      alt: 'Nature collection photography'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    // Scroll to top of the page when filter changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <MetaTags
        title="Photography Portfolio - Lion Kidz Photography Mauritius | Children & Family Photos"
        description="Explore our stunning photography portfolio featuring children, family, newborn, and event photography across Port Louis, Quatre Bornes, Curepipe, and all of Mauritius. Professional photography services by Lion Kidz Photography."
        keywords="Mauritius photography portfolio, children photography gallery, family photos Mauritius, newborn photography portfolio, event photography Mauritius, professional photographer portfolio, Port Louis photography, Quatre Bornes photographer"
        url="https://lionkidzphoto.mu/portfolio"
        structuredData={structuredData}
      />

      {/* Header Layout with Back Link */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <div className="mb-8">
            <BackLink to="/" label="" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Title and Icon */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                <img 
                  src="/images/LionKidzLogo.png" 
                  alt="Lion Kidz Photography" 
                  className="h-12 w-auto"
                />
                <LayoutGrid className="h-8 w-8 text-brand-lime" />
              </div>
              <h1 className="font-alegreya text-5xl md:text-7xl text-white mb-4 font-bold">
                {t('portfolioPage.title')} <span className="text-brand-lime">{t('portfolioPage.titleHighlight')}</span>
              </h1>
              <div className="w-24 h-1 bg-brand-pink mx-auto lg:mx-0 mb-6"></div>
            </div>
            
            {/* Right Side - Description */}
            <div className="text-center lg:text-left">
              <p className="font-alegreya text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                {t('portfolioPage.description1')} {t('portfolioPage.description2')}
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="bg-brand-pink/20 text-brand-pink px-4 py-2 rounded-full font-alegreya text-sm">
                  {t('portfolioPage.professionalPhotography')}
                </span>
                <span className="bg-brand-lime/20 text-brand-lime px-4 py-2 rounded-full font-alegreya text-sm">
                  {t('portfolioPage.mauritiusBased')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs - Horizontal Layout */}
      <section className="py-8 bg-gray-800/50 backdrop-blur-sm sticky top-16 z-40" data-filter-section>
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center bg-gray-700/50 rounded-full p-2 backdrop-blur-sm">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => handleFilterChange(filter.id)}
                  className={`px-6 py-3 rounded-full font-alegreya font-medium transition-all duration-300 mx-1 my-1 ${
                    activeFilter === filter.id
                      ? 'bg-brand-pink text-white shadow-lg shadow-brand-pink/30'
                      : 'text-gray-300 hover:bg-brand-lime/20 hover:text-brand-lime'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid - Collage Book Style */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Gallery Style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3">
            {filteredItems.map((item) => {
              // Create gallery style with uniform sizing
              
              return (
                <div
                  key={item.id}
                  className="group relative transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Dark Frame Gallery Style */}
                  <div className="relative bg-gray-800 border border-gray-700 p-1.5 md:p-2 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                       onClick={() => openLightbox(filteredItems.indexOf(item))}>
                    {/* Inner Image Container */}
                    <div className="relative overflow-hidden rounded-md aspect-square">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500">
                        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="text-center">
                            <h3 className="font-alegreya text-sm md:text-base text-white font-bold mb-1">
                              {item.title}
                            </h3>
                            <span className="bg-brand-lime/90 text-brand-darkGray px-2 py-1 rounded-full text-xs font-medium">
                              {filters.find(f => f.id === item.category)?.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner accent */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-pink rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg">
                      <Camera className="h-3 w-3 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-brand-pink rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-brand-lime rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-brand-pink rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-alegreya text-4xl md:text-6xl text-white mb-8 font-bold">
              {t('portfolioPage.cta.title')} <span className="text-brand-pink">{t('portfolioPage.cta.titleHighlight')}</span>
            </h2>
            <p className="font-alegreya text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('portfolioPage.cta.description')}
            </p>
            
            {/* CTA Buttons with new design */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/contact"
                className="group bg-brand-pink text-white px-10 py-4 rounded-full font-alegreya font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-pink/30 flex items-center space-x-2"
              >
                <span>{t('portfolioPage.cta.bookSession')}</span>
                <Camera className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="/services"
                className="group bg-transparent border-2 border-brand-lime text-brand-lime px-10 py-4 rounded-full font-alegreya font-bold text-lg hover:bg-brand-lime hover:text-brand-darkGray transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <span>{t('portfolioPage.cta.viewPackages')}</span>
                <LayoutGrid className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-2xl max-h-[70vh] w-full h-full flex items-center justify-center p-8">
            <div className="relative">
              <img
                src={filteredItems[lightboxIndex]?.image}
                alt={filteredItems[lightboxIndex]?.alt}
                className="object-contain"
                style={{ 
                  maxWidth: 'min(90vw, 800px)', 
                  maxHeight: '70vh',
                  width: 'auto',
                  height: 'auto'
                }}
              />
              
              {/* Watermarks */}
              <div className="absolute top-2 left-2 text-white/30 text-xs font-bold">
                Lion Kidz
              </div>
              <div className="absolute top-2 right-2 text-white/30 text-xs font-bold">
                Lion Kidz
              </div>
              <div className="absolute bottom-2 left-2 text-white/30 text-xs font-bold">
                Lion Kidz
              </div>
              <div className="absolute bottom-2 right-2 text-white/30 text-xs font-bold">
                Lion Kidz
              </div>
            </div>
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
              <h3 className="font-alegreya text-lg font-bold mb-1">
                {filteredItems[lightboxIndex]?.title}
              </h3>
              <p className="text-sm opacity-90">
                {filters.find(f => f.id === filteredItems[lightboxIndex]?.category)?.name}
              </p>
              <p className="text-xs opacity-70 mt-2">
                {lightboxIndex + 1} of {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
