import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onShowServices: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShowServices }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/finestral.png"
          alt={t.hero.backgroundImageAlt}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 hero-gradient"></div>
      </div>
      <div className="relative z-10 px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <img
            src="/assets/images/logo-hero.png"
            alt="Be&Go Logo"
            className="h-24 md:h-32 object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary mb-6 leading-tight">
          {t.hero.title.split(',').map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}{i < arr.length - 1 ? <>,<br /></> : null}
            </React.Fragment>
          ))}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 font-normal mb-10 max-w-3xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('/contacta')}
            className="bg-accent text-white text-base font-semibold px-10 py-4 rounded-full hover:bg-red-800 transition-all shadow-xl shadow-accent/25 w-full sm:w-auto"
          >
            {t.hero.ctaPrimary}
          </button>
          <button
            onClick={onShowServices}
            className="bg-white/80 backdrop-blur-md border border-gray-200 text-primary text-base font-semibold px-10 py-4 rounded-full hover:bg-white transition-all w-full sm:w-auto"
          >
            {t.hero.ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;