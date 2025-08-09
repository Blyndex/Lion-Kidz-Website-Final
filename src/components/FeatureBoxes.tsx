
import { Heart, Clock, Palette } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FeatureBoxes = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-alegreya text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6 font-bold">
            {t('featureBoxes.title')} <span className="text-brand-pink">{t('featureBoxes.titleHighlight')}</span>
          </h2>
          <p className="font-alegreya text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            {t('featureBoxes.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-gray-800 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-700">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-pink rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <Heart className="h-7 w-7 sm:h-8 sm:w-8 text-brand-darkGray" />
            </div>
            <div className="font-alegreya text-lg sm:text-xl text-white mb-3 sm:mb-4 font-bold">{t('featureBoxes.passion.title')}</div>
            <div className="font-alegreya text-sm sm:text-base text-gray-300 leading-relaxed">{t('featureBoxes.passion.description')}</div>
          </div>
          <div className="text-center bg-gray-800 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-700">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-lime rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <Clock className="h-7 w-7 sm:h-8 sm:w-8 text-brand-darkGray" />
            </div>
            <div className="font-alegreya text-lg sm:text-xl text-white mb-3 sm:mb-4 font-bold">{t('featureBoxes.patience.title')}</div>
            <div className="font-alegreya text-sm sm:text-base text-gray-300 leading-relaxed">{t('featureBoxes.patience.description')}</div>
          </div>
          <div className="text-center bg-gray-800 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-700">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-pink rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <Palette className="h-7 w-7 sm:h-8 sm:w-8 text-brand-darkGray" />
            </div>
            <div className="font-alegreya text-lg sm:text-xl text-white mb-3 sm:mb-4 font-bold">{t('featureBoxes.creativity.title')}</div>
            <div className="font-alegreya text-sm sm:text-base text-gray-300 leading-relaxed">{t('featureBoxes.creativity.description')}</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureBoxes;
