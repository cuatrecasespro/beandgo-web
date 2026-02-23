
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import OwnersForm from './components/OwnersForm';

const Home: React.FC = () => {
  return (
    <>
      <Hero
        onShowServices={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <Services />
      <About />
    </>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const isOwnersPage = location.pathname === '/propietaris';

  return (
    <div className="flex flex-col min-h-screen">
      {!isOwnersPage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propietaris" element={<OwnersForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isOwnersPage && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </Router>
  );
};

export default App;
