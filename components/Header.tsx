import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isOwners = location.pathname === '/propietaris' || location.pathname === '/contacta';

  return (
    <header className="glass-header sticky top-0 z-50 border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* LEFT: Logo */}
          <div
            className={`flex items-center ${!isHome ? 'cursor-pointer' : ''}`}
            onClick={() => !isHome && navigate('/')}
          >
            <Logo />
          </div>

          {/* CENTER: Language Switcher (Desktop) */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <LanguageSwitcher />
          </div>

          {/* RIGHT: Controls */}
          <div className="flex items-center">
            {/* Desktop Button */}
            <button
              onClick={() => navigate('/propietaris')}
              disabled={isOwners}
              className="hidden md:block bg-accent text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-red-800 transition-all shadow-lg shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t.nav.ownerAccess}
            </button>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-4">
              <LanguageSwitcher />
              <button
                onClick={() => navigate('/propietaris')}
                disabled={isOwners}
                className="material-symbols-outlined text-primary disabled:opacity-50 disabled:cursor-not-allowed">
                login
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
