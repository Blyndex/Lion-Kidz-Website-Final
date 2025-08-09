
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Camera } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import { sendToDiscord } from '../lib/discord-webhook';
import MetaTags from '../components/SEO/MetaTags';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.service) {
      toast({
        title: t('contactPage.form.error.title'),
        description: t('contactPage.form.error.description'),
        variant: 'destructive',
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t('contactPage.form.error.title'),
        description: t('contactPage.form.error.invalidEmail'),
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to Discord webhook
      await sendToDiscord(formData);

      // Success toast
      toast({
        title: t('contactPage.form.success.title'),
        description: t('contactPage.form.success.description'),
      });

      // Show success message
      setShowSuccess(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

    } catch (error) {
      toast({
        title: t('contactPage.form.error.title'),
        description: t('contactPage.form.error.sendFailed'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contactPage.info.phone'),
      details: ['+230 52818488'],
      color: 'brand-lime'
    },
    {
      icon: Mail,
      title: t('contactPage.info.email'),
      details: ['Lionkidz636@gmail.com'],
      color: 'brand-pink'
    },
    {
      icon: MapPin,
      title: t('contactPage.info.location'),
      details: ['Royal Road, Malakoff', 'Mauritius'],
      color: 'brand-lime'
    },
    {
      icon: Clock,
      title: t('contactPage.info.hours'),
      details: Array.isArray(t('contactPage.info.hoursDetails')) ? t('contactPage.info.hoursDetails') : [t('contactPage.info.hoursDetails')],
      color: 'brand-pink'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <MetaTags
        title="Contact Lion Kidz Photography - Book Your Session Mauritius"
        description="Contact Lion Kidz Photography for professional photography services in Mauritius. Book your family, children, or event photography session. Serving Port Louis, Quatre Bornes, Curepipe, Rose Hill and all of Mauritius."
        keywords="contact photographer Mauritius, book photography session Mauritius, family photography booking Mauritius, children photography Mauritius, event photography Mauritius, Port Louis photographer contact, Quatre Bornes photographer contact, Curepipe photographer contact, Rose Hill photographer contact"
        url="https://lionkidzphoto.mu/contact"
      />
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Send className="h-8 w-8 text-brand-pink" />
            <span className="font-alegreya text-brand-pink font-medium">{t('contactPage.getInTouch')}</span>
          </div>
          <h1 className="font-alegreya text-4xl md:text-6xl text-white mb-6 font-bold">
            {t('contactPage.title')} <span className="text-brand-lime">{t('contactPage.titleHighlight')}</span>
          </h1>
          <p className="font-alegreya text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contactPage.description')}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-alegreya text-3xl text-white mb-8 font-bold">
                {t('contactPage.form.title')} <span className="text-brand-pink">{t('contactPage.form.titleHighlight')}</span>
              </h2>
              
              {/* Success Message */}
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-600 border border-green-500 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-alegreya font-bold text-white text-lg">
                        {t('contactPage.form.success.title')}
                      </h3>
                      <p className="font-alegreya text-green-100">
                        {t('contactPage.form.success.description')}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-alegreya font-medium text-white mb-2">
                      {t('contactPage.form.fullName')} {t('contactPage.form.required')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg font-alegreya focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-alegreya font-medium text-white mb-2">
                      {t('contactPage.form.email')} {t('contactPage.form.required')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg font-alegreya focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-alegreya font-medium text-white mb-2">
                      {t('contactPage.form.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg font-alegreya focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all duration-200"
                      placeholder="+230 XXXX XXXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-alegreya font-medium text-white mb-2">
                      {t('contactPage.form.service')} {t('contactPage.form.required')}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg font-alegreya focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all duration-200"
                    >
                      <option value="">{t('contactPage.form.selectService')}</option>
                      <option value="nature">{t('services.items.natureExperience.title')}</option>
                      <option value="classic">{t('services.items.classicPortraits.title')}</option>
                      <option value="essential">{t('services.items.essentialStory.title')}</option>
                      <option value="signature">{t('services.items.signatureStory.title')}</option>
                      <option value="socialMedia">{t('featureBoxes.socialMedia.title')}</option>
                      <option value="other">{t('contactPage.form.other')}</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block font-alegreya font-medium text-white mb-2">
                    {t('contactPage.form.preferredDate')}
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg font-alegreya focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label className="block font-alegreya font-medium text-white mb-2">
                    {t('contactPage.form.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg font-alegreya focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all duration-200 resize-none"
                    placeholder={t('contactPage.form.messagePlaceholder')}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-pink text-white py-4 rounded-lg font-alegreya font-bold text-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>{t('contactPage.form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>{t('contactPage.form.sendMessage')}</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-alegreya text-3xl text-white mb-8 font-bold">
                {t('contactPage.info.title')} <span className="text-brand-lime">{t('contactPage.info.titleHighlight')}</span>
              </h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="h-6 w-6 text-brand-darkGray" />
                    </div>
                    <div>
                      <h3 className="font-alegreya font-bold text-white text-lg mb-2">
                        {info.title}
                      </h3>
                      {Array.isArray(info.details) ? info.details.map((detail, idx) => (
                        <p key={idx} className="font-alegreya text-gray-300">
                          {detail}
                        </p>
                      )) : (
                        <p className="font-alegreya text-gray-300">
                          {info.details}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-gray-700 rounded-2xl border border-gray-600">
                <h3 className="font-alegreya text-xl text-white mb-4 font-bold">
                  {t('contactPage.info.guarantee.title')}
                </h3>
                <p className="font-alegreya text-gray-300 mb-4">
                  {t('contactPage.info.guarantee.description')}
                </p>
                <div className="flex items-center space-x-2 text-brand-pink">
                  <Camera className="h-5 w-5" />
                  <span className="font-alegreya font-medium">{t('contactPage.info.guarantee.usually')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-alegreya text-4xl text-white mb-6 font-bold">
                {t('contactPage.faq.title')} <span className="text-brand-pink">{t('contactPage.faq.titleHighlight')}</span>
              </h2>
              <p className="font-alegreya text-xl text-gray-300">
                {t('contactPage.faq.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: t('contactPage.faq.items.booking.question'),
                  answer: t('contactPage.faq.items.booking.answer')
                },
                {
                  question: t('contactPage.faq.items.clothing.question'),
                  answer: t('contactPage.faq.items.clothing.answer')
                },
                {
                  question: t('contactPage.faq.items.travel.question'),
                  answer: t('contactPage.faq.items.travel.answer')
                },
                {
                  question: t('contactPage.faq.items.cancellation.question'),
                  answer: t('contactPage.faq.items.cancellation.answer')
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
    </div>
  );
};

export default Contact;
