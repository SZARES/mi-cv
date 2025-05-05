import React from 'react';
import { useCV } from '../context/CVContext';

const Portfolio = () => {
  const { cvData } = useCV();
  return (
    <section className="my-8">
      <h3 className="text-3xl font-semibold mb-4">Portafolio Personal</h3>
      <ul className="space-y-4">
        {cvData.portfolio.map((project, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200">
            <strong className="text-xl">{project.projectName}</strong>: {project.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;
