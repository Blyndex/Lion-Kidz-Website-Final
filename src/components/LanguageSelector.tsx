import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: t('languages.en'), shortCode: 'EN', flag: '/flags/UKFlag.png' },
    { code: 'fr', name: t('languages.fr'), shortCode: 'FR', flag: '/flags/FRFlag.png' },
    { code: 'es', name: t('languages.es'), shortCode: 'ES', flag: '/flags/ESFlag.png' },
    { code: 'it', name: t('languages.it'), shortCode: 'IT', flag: '/flags/ITFlag.png' },
    { code: 'nl', name: t('languages.nl'), shortCode: 'NL', flag: '/flags/NLFlag.png' },
  ];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-300 hover:text-brand-pink transition-colors px-3 py-2 rounded-md hover:bg-gray-100/10"
      >
        <img 
          src={currentLanguage.flag} 
          alt={`${currentLanguage.name} flag`}
          className="w-6 h-4 object-cover rounded-sm mr-2 flex-shrink-0"
        />
        <span className="hidden sm:inline font-alegreya text-sm">
          {currentLanguage.shortCode}
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 sm:right-0 left-0 sm:left-auto mt-1 bg-gray-800 border border-gray-600 rounded-md shadow-lg z-[9999] min-w-[200px] w-full sm:w-auto">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center space-x-3 px-4 py-4 sm:py-3 text-left hover:bg-gray-700 transition-colors ${
                language.code === currentLanguage.code ? 'bg-gray-700' : ''
              }`}
            >
              <img 
                src={language.flag} 
                alt={`${language.name} flag`}
                className="w-6 h-4 object-cover rounded-sm mr-2 flex-shrink-0"
              />
              <span className="font-alegreya text-white text-sm sm:text-base">
                {language.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;