
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 sm:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
            {t.services.sectionTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {t.services.cards.map((card, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              <div className="w-14 h-14 bg-brand-light-grey rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-accent text-3xl">{card.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{card.title}</h3>
              <p className="text-gray-500 leading-relaxed text-base font-light">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-16 border-t border-gray-100">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">
            {t.services.proceduresTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-5xl mx-auto">
            {t.services.procedures.map((procedure, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-brand-light-grey/50 rounded-lg hover:bg-brand-light-grey transition-colors">
                <span className="material-symbols-outlined text-accent text-xl">check_circle</span>
                <span className="text-gray-700 font-medium">{procedure}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
