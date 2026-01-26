
import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import OwnersForm from './components/OwnersForm';

export type View = 'home' | 'form';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  const goToHome = () => setView('home');
  const goToForm = () => setView('form');

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header setView={setView} currentView={view} />
        <main className="flex-grow">
          <div style={{ display: view === 'home' ? 'block' : 'none' }}>
            <Hero onShowServices={() => document.getElementById('services')?.scrollIntoView()} onShowForm={goToForm} />
            <Services />
            <About />
          </div>
          <div style={{ display: view === 'form' ? 'block' : 'none' }}>
            <OwnersForm onBack={goToHome} />
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
