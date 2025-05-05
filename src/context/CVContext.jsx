import React, { createContext, useState, useContext } from 'react';

const CVContext = createContext();

export const useCV = () => {
  return useContext(CVContext);
};

export const CVProvider = ({ children }) => {
  const [cvData, setCvData] = useState({
    name: 'Bruss Antonio Silva Riofrio',
    jobTitle: 'Frontend Developer (React + AI)',
    contact: 'Piura, Perú | 969455288 | brusssilva904@gmail.com',
    github: 'https://github.com/SZARES',
    profile: `Estudiante de Ingeniería de Sistemas en UTP (7timo ciclo), con enfoque en desarrollo Frontend. Apasionado por crear experiencias digitales modernas utilizando React.js, TailwindCSS y Figma. Manejo fluido de herramientas de asistencia como ChatGPT para optimizar el desarrollo, consumo de APIs REST y estructuración de interfaces reutilizables. Entusiasta de la Inteligencia Artificial aplicada al desarrollo web.`,
    skills: [
      'HTML', 'CSS', 'JavaScript (ES6+)', 'React.js (Hooks, Context API)', 'Python',
      'TailwindCSS', 'Figma', 'Responsive Design', 'Componentes reutilizables',
      'ChatGPT', 'GitHub Copilot', 'Fetch', 'Consumo de APIs', 'Git y GitHub',
      'Metodologías ágiles (Scrum básico)', 'Buenas prácticas de UI/UX'
    ],
    experience: [
      {
        jobTitle: 'Frontend Developer',
        company: 'UTP',
        duration: '2025',
        project: 'InnovaEd',
        description: `Desarrollo de una plataforma educativa con gamificación e inteligencia artificial. Implementación de interfaz con React y diseño modular con TailwindCSS. Creación de componentes reutilizables y consumo de APIs para contenidos dinámicos. Uso de ChatGPT como asistente de código en tareas clave. Coordinación con el equipo bajo principios de Scrum.`
      }
    ],
    portfolio: [
      { projectName: 'Sitio web de servicios', description: 'Diseño web, Seguridad, etc.' },
      { projectName: 'Menú de navegación dinámico', description: 'Prácticas con consumo de APIs públicas y organización de estados globales.' }
    ],
    education: [
      { degree: 'Ingeniería de Sistemas', institution: 'UTP', year: 'Actualmente en 7timo ciclo' }
    ],
    extras: [
      'Interés constante en aplicar IA para mejorar la experiencia de usuario.',
      'Buen manejo de herramientas de diseño (Figma) para prototipos.',
      'Creatividad, iniciativa y aprendizaje autodidacta.'
    ]
  });

  return (
    <CVContext.Provider value={{ cvData, setCvData }}>
      {children}
    </CVContext.Provider>
  );
};
