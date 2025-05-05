import React from 'react';
import { useCV } from '../context/CVContext';

const Skills = () => {
  const { cvData } = useCV();
  return (
    <section className="my-8">
      <h3 className="text-3xl font-semibold mb-4">Habilidades Técnicas</h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-lg">
        {cvData.skills.map((skill, index) => (
          <li key={index} className="bg-gray-100 p-3 rounded-lg shadow-md hover:bg-gray-200">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
