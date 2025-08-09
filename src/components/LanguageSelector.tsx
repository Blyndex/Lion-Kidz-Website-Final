import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: 'en', name: t('languages.en'), flag: '🇺🇸', shortCode: 'EN' },
    { code: 'fr', name: t('languages.fr'), flag: '🇫🇷', shortCode: 'FR' },
    { code: 'es', name: t('languages.es'), flag: '🇪🇸', shortCode: 'ES' },
    { code: 'it', name: t('languages.it'), flag: '🇮🇹', shortCode: 'IT' },
    { code: 'nl', name: t('languages.nl'), flag: '🇳🇱', shortCode: 'NL' },
  ];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <Select value={i18n.language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-auto border-0 bg-transparent hover:bg-gray-100/10 text-gray-300 hover:text-brand-pink transition-colors">
        <div className="flex items-center space-x-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline font-alegreya text-sm">
            {currentLanguage.shortCode}
          </span>
          <span className="sm:hidden font-alegreya text-sm">
            {currentLanguage.flag}
          </span>
        </div>
      </SelectTrigger>
      <SelectContent className="bg-gray-800 border border-gray-600 shadow-lg">
        {languages.map((language) => (
          <SelectItem
            key={language.code}
            value={language.code}
            className="cursor-pointer hover:bg-gray-700 focus:bg-gray-700 text-white"
          >
            <div className="flex items-center space-x-2">
              <span>{language.flag}</span>
              <span className="font-alegreya">{language.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;