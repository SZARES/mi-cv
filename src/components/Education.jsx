import React from 'react';
import { useCV } from '../context/CVContext';

const Education = () => {
  const { cvData } = useCV();
  return (
    <section className="my-8">
      <h3 className="text-2xl font-semibold">Formación Académica</h3>
      <ul className="mt-4">
        {cvData.education.map((edu, index) => (
          <li key={index} className="mb-2">
            <strong>{edu.degree}</strong> en {edu.institution} ({edu.year})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
