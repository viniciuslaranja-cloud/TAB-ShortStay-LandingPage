
import React from 'react';

export const Platforms: React.FC = () => {
  const platforms = [
    { name: 'Airbnb', icon: 'fab fa-airbnb' },
    { name: 'Booking.com', icon: 'fas fa-globe' },
    { name: 'VRBO', icon: 'fas fa-home' },
    { name: 'Decolar', icon: 'fas fa-plane' },
    { name: 'Expedia', icon: 'fas fa-suitcase' }
  ];

  return (
    <div className="bg-white py-12 border-b">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-8">Anunciamos nas maiores vitrines do mundo</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
          {platforms.map(p => (
            <div key={p.name} className="flex items-center space-x-2">
              <i className={`${p.icon} text-2xl md:text-3xl text-gray-700`}></i>
              <span className="text-xl font-bold text-gray-700">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
