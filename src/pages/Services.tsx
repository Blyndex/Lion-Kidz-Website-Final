
import { Camera, Users, Calendar, Heart, Check, Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BackLink from '../components/BackLink';
import MetaTags from '../components/SEO/MetaTags';
import { getServiceStructuredData } from '../components/SEO/StructuredData';

const Services = () => {
  const { t } = useTranslation();
  const structuredData = getServiceStructuredData("Professional Photography Services", "Comprehensive photography services including family portraits, children photography, event photography, and outdoor sessions in Mauritius", "MUR 800-4,400");
  const services = [
    {
      icon: Camera,
      title: t('services.items.natureExperience.title'),
      description: t('services.items.natureExperience.description'),
      price: 'MUR 800',
      duration: '1 hour 30 mins',
      includes: [
        `20 ${t('servicesPage.includes.highResPhotos')}`,
        t('servicesPage.includes.lightroomEditing'),
        t('servicesPage.includes.onlineGallery'),
        t('servicesPage.includes.outdoorGuidance')
      ],
      color: 'brand-lime'
    },
    {
      icon: Users,
      title: t('services.items.classicPortraits.title'),
      description: t('services.items.classicPortraits.description'),
      price: 'MUR 800',
      duration: '1 hour',
      includes: [
        `15 ${t('servicesPage.includes.highResPhotos')}`,
        t('servicesPage.includes.lightroomEditing'),
        `1 ${t('servicesPage.includes.outfitChange')}`,
        t('servicesPage.includes.onLocationSession')
      ],
      color: 'brand-pink'
    },
    {
      icon: Heart,
      title: t('services.items.essentialStory.title'),
      description: t('services.items.essentialStory.description'),
      price: 'MUR 2,200',
      duration: '1 hour',
      includes: [
        `25 ${t('servicesPage.includes.highResPhotos')}`,
        t('servicesPage.includes.lightroomEditing'),
        t('servicesPage.includes.multiplePoses'),
        t('servicesPage.includes.printsIncluded')
      ],
      color: 'brand-lime'
    },
    {
      icon: Calendar,
      title: t('services.items.signatureStory.title'),
      description: t('services.items.signatureStory.description'),
      price: 'MUR 4,400',
      duration: '2 hours',
      includes: [
        `50 ${t('servicesPage.includes.highResPhotos')}`,
        t('servicesPage.includes.lightroomEditing'),
        t('servicesPage.includes.multipleLocations'),
        t('servicesPage.includes.printsIncluded')
      ],
      color: 'brand-pink'
    }
  ];

  const addOns = [
    t('servicesPage.addOns.printing'),
    t('servicesPage.addOns.additionalEditing'),
    t('servicesPage.addOns.rushDelivery')
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <MetaTags
        title="Professional Photography Services Mauritius | Family, Children & Event Photography"
        description="Professional photography services in Mauritius including family portraits, children photography, event photography, and outdoor sessions. Serving Port Louis, Quatre Bornes, Curepipe, Rose Hill and all of Mauritius."
        keywords="photography services Mauritius, family photography Mauritius, children photography Mauritius, event photography Mauritius, portrait photography Mauritius, professional photographer Mauritius, Port Louis photographer, Quatre Bornes photographer, Curepipe photographer, Rose Hill photographer, outdoor photography Mauritius, studio photography Mauritius"
        url="https://lionkidzphoto.mu/services"
        structuredData={structuredData}
      />
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <div className="mb-8">
            <BackLink to="/" label="" />
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="h-8 w-8 text-brand-pink" />
              <span className="font-alegreya text-brand-pink font-medium">{t('servicesPage.ourServices')}</span>
            </div>
            <h1 className="font-alegreya text-4xl md:text-6xl text-white mb-6 font-bold">
              {t('servicesPage.title')} <span className="text-brand-lime">{t('servicesPage.titleHighlight')}</span>
            </h1>
            <p className="font-alegreya text-xl text-gray-300 max-w-3xl mx-auto">
              {t('servicesPage.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-gray-700 rounded-3xl p-8 shadow-xl border border-gray-600 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-20 h-20 bg-${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="h-10 w-10 text-brand-darkGray" />
                </div>
                
                <h3 className="font-alegreya text-2xl text-white mb-4 font-bold">
                  {service.title}
                </h3>
                
                <p className="font-alegreya text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="font-alegreya font-bold text-2xl text-brand-pink">
                    {service.price}
                  </div>
                  <div className="font-alegreya text-gray-400">
                    {t('servicesPage.duration')}: {service.duration}
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {service.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-brand-lime flex-shrink-0" />
                      <span className="font-alegreya text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                
                <NavLink
                  to="/contact"
                  className={`w-full bg-${service.color} text-brand-darkGray py-4 rounded-full font-alegreya font-bold text-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-200 flex items-center justify-center`}
                >
                  {t('servicesPage.bookPackage')}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-alegreya text-4xl text-white mb-6 font-bold">
                {t('servicesPage.addOns.title')} <span className="text-brand-pink">{t('servicesPage.addOns.titleHighlight')}</span>
              </h2>
              <p className="font-alegreya text-xl text-gray-300">
                {t('servicesPage.addOns.description')}
              </p>
            </div>
            
            <div className="bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-600">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addOns.map((addon, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-brand-lime rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-brand-darkGray" />
                    </div>
                    <span className="font-alegreya text-gray-300">{addon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-alegreya text-4xl text-white mb-6 font-bold">
                {t('servicesPage.faq.title')} <span className="text-brand-lime">{t('servicesPage.faq.titleHighlight')}</span> {t('servicesPage.faq.titleEnd')}
              </h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: t('servicesPage.faq.items.booking.question'),
                  answer: t('servicesPage.faq.items.booking.answer')
                },
                {
                  question: t('servicesPage.faq.items.weather.question'),
                  answer: t('servicesPage.faq.items.weather.answer')
                },
                {
                  question: t('servicesPage.faq.items.delivery.question'),
                  answer: t('servicesPage.faq.items.delivery.answer')
                },
                {
                  question: t('servicesPage.faq.items.rawPhotos.question'),
                  answer: t('servicesPage.faq.items.rawPhotos.answer')
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-700 rounded-2xl p-6 shadow-lg border border-gray-600">
                  <h3 className="font-alegreya font-bold text-white text-lg mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-alegreya text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Management */}
      <section className="py-20 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border border-brand-lime rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 border border-brand-pink rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-alegreya text-4xl md:text-6xl text-white mb-6 font-bold">
                {t('servicesPage.socialMedia.title')} <span className="text-brand-pink">{t('servicesPage.socialMedia.titleHighlight')}</span>
              </h2>
              <p className="font-alegreya text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {t('servicesPage.socialMedia.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600 shadow-lg">
                  <h3 className="font-alegreya text-2xl text-white mb-6 font-bold text-center">
                    {t('servicesPage.socialMedia.businesses.title')}
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                      <span className="font-alegreya text-gray-300">{t('servicesPage.socialMedia.businesses.strategy')}</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                      <span className="font-alegreya text-gray-300">{t('servicesPage.socialMedia.businesses.content')}</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                      <span className="font-alegreya text-gray-300">{t('servicesPage.socialMedia.businesses.community')}</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                      <span className="font-alegreya text-gray-300">{t('servicesPage.socialMedia.businesses.analytics')}</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600 shadow-lg">
                  <h3 className="font-alegreya text-2xl text-white mb-6 font-bold text-center">
                    {t('servicesPage.socialMedia.creators.title')}
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-lime rounded-full"></div>
                      <span className="font-alegreya text-gray-300">{t('servicesPage.socialMedia.creators.branding')}</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-lime rounded-full"></div>
                      <span className="font-alegreya text-gray-300">{t('servicesPage.socialMedia.creators.scheduling')}</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-lime rounded-full"></div>
                      <span className="font-alegreya text-gray-300">{t('servicesPage.socialMedia.creators.growth')}</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-lime rounded-full"></div>
                      <span className="font-alegreya text-gray-300">{t('servicesPage.socialMedia.creators.monetization')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center bg-gray-800 rounded-2xl p-8 border border-gray-600 shadow-lg">
              <h3 className="font-alegreya text-2xl text-white mb-4 font-bold">
                {t('servicesPage.socialMedia.experience.title')}
              </h3>
              <p className="font-alegreya text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                {t('servicesPage.socialMedia.experience.description')}
              </p>
              <div className="flex justify-center items-center space-x-8">
                <div className="text-center">
                  <div className="font-alegreya text-4xl text-brand-pink font-bold">5+</div>
                  <div className="font-alegreya text-gray-400">{t('servicesPage.socialMedia.experience.years')}</div>
                </div>
                <div className="text-center">
                  <div className="font-alegreya text-4xl text-brand-lime font-bold">50+</div>
                  <div className="font-alegreya text-gray-400">{t('servicesPage.socialMedia.experience.clients')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              {t('servicesPage.cta.title')} <span className="text-brand-lime">{t('servicesPage.cta.titleHighlight')}</span>
            </h2>
            <p className="font-alegreya text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('servicesPage.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <NavLink
                to="/contact"
                className="group bg-brand-pink text-white px-10 py-4 rounded-full font-alegreya font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-pink/30 flex items-center space-x-2"
              >
                <span>{t('servicesPage.cta.getStarted')}</span>
                <Camera className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
