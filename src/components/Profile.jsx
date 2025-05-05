import React from 'react';
import { useCV } from '../context/CVContext';

const Profile = () => {
  const { cvData } = useCV();
  return (
    <section className="my-8">
      <h3 className="text-3xl font-semibold mb-4">Perfil Profesional</h3>
      <p className="text-lg text-justify leading-relaxed">{cvData.profile}</p>
    </section>
  );
};

export default Profile;
