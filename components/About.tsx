
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 sm:py-32 px-4 bg-brand-light-grey">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-8">
          {t.about.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl">
          {t.about.description}
        </p>
        <div className="flex flex-col items-center">
          <div className="w-12 h-1 bg-accent mb-6 rounded-full"></div>
          <blockquote className="italic text-2xl md:text-3xl text-primary font-medium tracking-tight">
            {t.about.quote}
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
