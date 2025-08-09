
import { Camera, Users, Calendar, Heart } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServicesPreview = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Camera,
      title: t('services.items.natureExperience.title'),
      description: t('services.items.natureExperience.description'),
      price: 'MUR 800',
      color: 'brand-lime'
    },
    {
      icon: Users,
      title: t('services.items.classicPortraits.title'),
      description: t('services.items.classicPortraits.description'),
      price: 'MUR 800',
      color: 'brand-pink'
    },
    {
      icon: Heart,
      title: t('services.items.essentialStory.title'),
      description: t('services.items.essentialStory.description'),
      price: 'MUR 2,200',
      color: 'brand-lime'
    },
    {
      icon: Calendar,
      title: t('services.items.signatureStory.title'),
      description: t('services.items.signatureStory.description'),
      price: 'MUR 4,400',
      color: 'brand-pink'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-alegreya text-3xl sm:text-4xl md:text-5xl text-brand-darkGray mb-4 sm:mb-6 font-bold">
            {t('services.title')} <span className="text-brand-pink">{t('services.titleHighlight')}</span>
          </h2>
          <p className="font-alegreya text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-${service.color} rounded-full flex items-center justify-center mb-4 sm:mb-6`}>
                <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-brand-darkGray" />
              </div>
              
              <h3 className="font-alegreya text-lg sm:text-xl text-brand-darkGray mb-3 sm:mb-4 font-bold">
                {service.title}
              </h3>
              
              <p className="font-alegreya text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="font-alegreya font-bold text-brand-pink text-sm sm:text-base">
                  {service.price}
                </span>
                <NavLink
                  to="/services"
                  className="font-alegreya text-gray-600 hover:text-brand-pink transition-colors font-medium text-sm sm:text-base"
                >
                  {t('services.learnMore')}
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <NavLink
            to="/services"
            className="bg-brand-lime text-brand-darkGray px-6 sm:px-8 py-3 sm:py-4 rounded-full font-alegreya font-bold text-base sm:text-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2"
          >
            <span>{t('services.viewAll')}</span>
            <Camera className="h-4 w-4 sm:h-5 sm:w-5" />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
