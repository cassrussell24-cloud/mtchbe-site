import React from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  visual: React.ReactNode;
}

const InfluencerVisual: React.FC = () => (
  <svg viewBox="0 0 100 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="20" cy="14" r="2" fill="#000" fillOpacity="0.5"/>
    <circle cx="50" cy="14" r="2" fill="#000" fillOpacity="0.5"/>
    <circle cx="80" cy="14" r="2" fill="#000" fillOpacity="0.5"/>
    <circle cx="20" cy="28" r="2" fill="#000" fillOpacity="0.5"/>
    <circle cx="50" cy="28" r="3" fill="#000"/>
    <circle cx="80" cy="28" r="2" fill="#000" fillOpacity="0.5"/>
    <circle cx="20" cy="42" r="2" fill="#000" fillOpacity="0.5"/>
    <circle cx="50" cy="42" r="2" fill="#000" fillOpacity="0.5"/>
    <circle cx="80" cy="42" r="2" fill="#000" fillOpacity="0.5"/>
    <path d="M50 28 L 20 14" stroke="#4EA8FF" strokeWidth="1.5"/>
    <path d="M50 28 L 80 14" stroke="#4EA8FF" strokeWidth="1.5"/>
    <path d="M50 28 L 50 42" stroke="#4EA8FF" strokeWidth="1.5"/>
    <path d="M50 28 L 80 28" stroke="#4EA8FF" strokeWidth="1.5"/>
  </svg>
);

const StrategyVisual: React.FC = () => (
  <svg viewBox="0 0 100 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="15" y="8" width="45" height="40" fill="#000" />
    <rect x="40" y="14" width="45" height="34" fill="none" stroke="#000" strokeWidth="2" strokeOpacity="0.5" />
    <rect x="48" y="21" width="18" height="14" fill="#4EA8FF" />
  </svg>
);

const ProductionVisual: React.FC = () => (
    <svg viewBox="0 0 100 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="10" y="8" width="80" height="40" rx="2" stroke="#000" strokeWidth="2" fill="none" />
        <path d="M44 21 L 59 28 L 44 35 Z" fill="#4EA8FF" />
    </svg>
);

const CommunityVisual: React.FC = () => (
    <svg viewBox="0 0 100 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M30 38 C 25 38 22 35 22 30 C 22 25 25 22 30 22 H 50 C 55 22 58 25 58 30 C 58 35 55 38 50 38 H 40 L 35 43 L 35 38 H 30 Z" fill="#000" />
        <path d="M70 28 C 75 28 78 25 78 20 C 78 15 75 12 70 12 H 50 C 45 12 42 15 42 20 C 42 25 45 28 50 28 H 60 L 65 33 L 65 28 H 70 Z" fill="#4EA8FF" />
    </svg>
);


const services: Service[] = [
  { id: 1, title: 'INFLUENCER MANAGEMENT', description: 'We connect brands with creators who move culture — from sourcing to storytelling.', visual: <InfluencerVisual /> },
  { id: 2, title: 'BRAND STRATEGY & CREATIVE DIRECTION', description: 'We turn cultural insights into identities that can’t be ignored.', visual: <StrategyVisual /> },
  { id: 3, title: 'PRODUCTION & CONTENT STUDIO', description: 'From brainstorm to camera roll — we make content that earns attention.', visual: <ProductionVisual /> },
  { id: 4, title: 'COMMUNITY & SOCIAL MANAGEMENT', description: 'We build real-world connection through smart, social storytelling.', visual: <CommunityVisual /> },
];

const Services: React.FC = () => {
  return (
    <section id="what-we-do" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-base font-medium text-gray-700">We’re not a ‘full-service agency.’ We’re a creative shortcut.</p>
          <p className="mt-4 text-3xl md:text-4xl font-medium tracking-tight">
            MTCHBE. helps brands make culture — not decks.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-[#F7F6F3] p-8">
              <div className="aspect-video w-full mb-6 flex items-center justify-center animate-subtle-flicker">
                  {service.visual}
              </div>
              <h3 className="text-xl font-black tracking-tight uppercase">{service.title}</h3>
              <p className="mt-2 text-base text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
