import React from 'react';
import { useCV } from '../context/CVContext';

const Header = () => {
  const { cvData } = useCV();
  return (
    <header className="text-center py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <h1 className="text-5xl font-extrabold">{cvData.name}</h1>
      <h2 className="text-3xl mt-2">{cvData.jobTitle}</h2>
      <p className="text-xl mt-4">{cvData.contact}</p>
      <a href={cvData.github} target="_blank" rel="noopener noreferrer" className="text-blue-300 mt-4 block">
        <button className="bg-blue-500 px-6 py-2 rounded-md text-white">GitHub</button>
      </a>
    </header>
  );
};

export default Header;
