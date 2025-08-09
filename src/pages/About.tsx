import { Camera, Award, Heart, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BackLink from '../components/BackLink';
import { useState, useEffect } from 'react';
import MetaTags from '../components/SEO/MetaTags';

const About = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const aboutImages = [
    {
      src: "/images/about/alex1.webp",
      alt: "Alex - Professional Photographer"
    },
    {
      src: "/images/about/alex2.jpg",
      alt: "Alex - Photography Session"
    },
    {
      src: "/images/about/alex3.webp",
      alt: "Alex - Portrait Photography"
    },
    {
      src: "/images/about/alex4.webp",
      alt: "Alex - Photography Work"
    },
    {
      src: "/images/about/alex5.jpg",
      alt: "Alex - Professional Photography"
    },
    {
      src: "/images/about/alex6.jpg",
      alt: "Alex - Photography Excellence"
    },
    {
      src: "/images/about/alex7.jpg",
      alt: "Alex - Portrait Session"
    },
    {
      src: "/images/about/alex8.jpg",
      alt: "Alex - Photography Artistry"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [aboutImages.length]);
  const achievements = [
    {
      icon: Users,
      number: '500+',
      text: t('aboutPage.achievements.happyFamilies')
    },
    {
      icon: Camera,
      number: '5+',
      text: t('aboutPage.achievements.yearsExperience')
    },
    {
      icon: Award,
      number: '50+',
      text: t('aboutPage.achievements.awards')
    },
    {
      icon: Heart,
      number: '100%',
      text: t('aboutPage.achievements.satisfaction')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <MetaTags
        title="About Lion Kidz Photography - Professional Photographer Mauritius"
        description="Meet Alex, professional photographer in Mauritius specializing in family, children, and event photography. 5+ years experience capturing precious moments across Port Louis, Quatre Bornes, Curepipe, Rose Hill and all of Mauritius."
        keywords="about photographer Mauritius, Alex photographer Mauritius, professional photographer Mauritius, family photographer Mauritius, children photographer Mauritius, event photographer Mauritius, Port Louis photographer about, Quatre Bornes photographer about, Curepipe photographer about, Rose Hill photographer about, photography experience Mauritius"
        url="https://lionkidzphoto.mu/about"
      />
      {/* Header with Back Link */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <div className="mb-8">
            <BackLink to="/" label={t('nav.backToHome') || 'Back to Home'} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-brand-pink" />
                <span className="font-alegreya text-brand-pink font-medium">{t('aboutPage.aboutUs')}</span>
              </div>
              <h1 className="font-alegreya text-4xl md:text-6xl text-white mb-6 font-bold">
                {t('aboutPage.title')} <span className="text-brand-lime">{t('aboutPage.titleHighlight')}</span>
              </h1>
              <p className="font-alegreya text-xl text-gray-300 leading-relaxed">
                {t('aboutPage.description')}
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl shadow-2xl w-full h-[500px] overflow-hidden">
                {aboutImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      objectPosition: image.src.includes('alex6.jpg') ? 'center top' : 
                                   image.src.includes('alex2.jpg') || image.src.includes('alex1.webp') ? 'center 30%' : 'center'
                    }}
                  />
                ))}
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-pink rounded-2xl p-6 text-white">
                <div className="font-alegreya text-2xl font-bold">{t('aboutPage.established')}</div>
                <div className="font-alegreya">{t('aboutPage.establishedText')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-alegreya text-4xl text-center text-white mb-12 font-bold">
              {t('aboutPage.story.title')} <span className="text-brand-pink">{t('aboutPage.story.titleHighlight')}</span> {t('aboutPage.story.titleEnd')}
            </h2>
            
            <div className="space-y-8 font-alegreya text-lg text-gray-300 leading-relaxed">
              <p>
                {t('aboutPage.story.paragraph1')}
              </p>
              
              <p>
                {t('aboutPage.story.paragraph2')}
              </p>
              
              <p>
                {t('aboutPage.story.paragraph3')}
              </p>
              
              <p>
                {t('aboutPage.story.paragraph4')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-alegreya text-4xl text-white mb-6 font-bold">
              {t('aboutPage.achievements.title')} <span className="text-brand-lime">{t('aboutPage.achievements.titleHighlight')}</span>
            </h2>
            <p className="font-alegreya text-xl text-gray-300 max-w-2xl mx-auto">
              {t('aboutPage.achievements.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-brand-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-10 w-10 text-white" />
                </div>
                <div className="font-alegreya text-4xl text-white mb-2 font-bold">
                  {achievement.number}
                </div>
                <div className="font-alegreya text-gray-300">
                  {achievement.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-alegreya text-4xl text-white mb-8 font-bold">
              {t('aboutPage.philosophy.title')} <span className="text-brand-pink">{t('aboutPage.philosophy.titleHighlight')}</span> {t('aboutPage.philosophy.titleEnd')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-600">
                <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-brand-darkGray" />
                </div>
                <h3 className="font-alegreya text-xl text-white mb-4 font-bold">{t('aboutPage.philosophy.passion.title')}</h3>
                <p className="font-alegreya text-gray-300">
                  {t('aboutPage.philosophy.passion.description')}
                </p>
              </div>
              
              <div className="bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-600">
                <div className="w-16 h-16 bg-brand-pink rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-alegreya text-xl text-white mb-4 font-bold">{t('aboutPage.philosophy.patience.title')}</h3>
                <p className="font-alegreya text-gray-300">
                  {t('aboutPage.philosophy.patience.description')}
                </p>
              </div>
              
              <div className="bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-600">
                <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="h-8 w-8 text-brand-darkGray" />
                </div>
                <h3 className="font-alegreya text-xl text-white mb-4 font-bold">{t('aboutPage.philosophy.creativity.title')}</h3>
                <p className="font-alegreya text-gray-300">
                  {t('aboutPage.philosophy.creativity.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-brand-pink rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-brand-lime rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-brand-pink rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-alegreya text-4xl text-white mb-6 font-bold">
            {t('aboutPage.cta.title')} <span className="text-brand-lime">{t('aboutPage.cta.titleHighlight')}</span> {t('aboutPage.cta.titleEnd')}
          </h2>
          <p className="font-alegreya text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('aboutPage.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <NavLink
              to="/contact"
              className="bg-brand-pink text-white px-8 py-4 rounded-full font-alegreya font-bold text-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-200"
            >
              {t('aboutPage.cta.bookSession')}
            </NavLink>
            <NavLink
              to="/portfolio"
              className="bg-brand-lime text-brand-darkGray px-8 py-4 rounded-full font-alegreya font-bold text-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-200"
            >
              {t('aboutPage.cta.viewPortfolio')}
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
