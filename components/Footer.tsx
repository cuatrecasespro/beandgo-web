
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Logo />
            <p className="mt-4 text-sm text-gray-500 max-w-xs">{t.footer.description}</p>
          </div>
          <div className="text-center md:text-right">
            <h4 className="font-bold text-primary mb-2 text-sm tracking-wider">{t.footer.contactTitle}</h4>
            <p className="text-sm text-gray-500">Només urgències: +34971382900</p>
            <p className="text-sm text-gray-500">Ciutadella, Menorca</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Be&Go. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
