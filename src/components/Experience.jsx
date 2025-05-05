import React from 'react';
import { useCV } from '../context/CVContext';

const Experience = () => {
  const { cvData } = useCV();
  return (
    <section className="my-8">
      <h3 className="text-3xl font-semibold mb-4">Experiencia Relevante</h3>
      <ul className="space-y-6">
        {cvData.experience.map((job, index) => (
          <li key={index} className="border-l-4 border-indigo-600 pl-6">
            <h4 className="text-xl font-semibold">{job.jobTitle} en {job.company} ({job.duration})</h4>
            <p className="text-lg text-justify leading-relaxed mt-2">{job.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
