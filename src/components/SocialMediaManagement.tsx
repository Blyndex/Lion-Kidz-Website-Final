import { Camera, TrendingUp, Users, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const SocialMediaManagement = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-alegreya text-3xl sm:text-4xl md:text-5xl text-white mb-4 font-bold">
            {t('socialMediaManagement.title')} <span className="text-brand-pink">{t('socialMediaManagement.titleHighlight')}</span>
          </h2>
          <p className="font-alegreya text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            {t('socialMediaManagement.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-lime rounded-full flex items-center justify-center flex-shrink-0">
                <Camera className="h-6 w-6 text-brand-darkGray" />
              </div>
              <div>
                <h3 className="font-alegreya text-xl text-white mb-2 font-bold">{t('socialMediaManagement.photography.title')}</h3>
                <p className="font-alegreya text-gray-300">{t('socialMediaManagement.photography.description')}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-pink rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-brand-darkGray" />
              </div>
              <div>
                <h3 className="font-alegreya text-xl text-white mb-2 font-bold">{t('socialMediaManagement.growth.title')}</h3>
                <p className="font-alegreya text-gray-300">{t('socialMediaManagement.growth.description')}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-lime rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-brand-darkGray" />
              </div>
              <div>
                <h3 className="font-alegreya text-xl text-white mb-2 font-bold">{t('socialMediaManagement.engagement.title')}</h3>
                <p className="font-alegreya text-gray-300">{t('socialMediaManagement.engagement.description')}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-pink to-brand-lime rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-brand-darkGray" />
              </div>
              <h3 className="font-alegreya text-2xl text-white mb-2 font-bold">{t('socialMediaManagement.cta.title')}</h3>
              <p className="font-alegreya text-gray-300 mb-6">{t('socialMediaManagement.cta.description')}</p>
            </div>
            
            <div className="space-y-4">
              <div className="text-center">
                <span className="font-alegreya text-sm text-gray-400 uppercase tracking-wider">{t('socialMediaManagement.cta.experience')}</span>
                <p className="font-alegreya text-3xl text-brand-lime font-bold">{t('socialMediaManagement.cta.years')}</p>
              </div>
              
              <Button asChild className="w-full bg-gradient-to-r from-brand-pink to-brand-lime hover:from-brand-pink/90 hover:to-brand-lime/90 text-brand-darkGray font-bold">
                <Link to="/contact">{t('socialMediaManagement.cta.button')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaManagement;