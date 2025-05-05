import React from 'react';
import { CVProvider } from './context/CVContext';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App = () => {
  return (
    <CVProvider>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Header />
        <Profile />
        <Experience />
        <Education />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    </CVProvider>
  );
};

export default App;
