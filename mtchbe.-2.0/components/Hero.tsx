import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-[#F7F6F3] px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-none">
          MTCHBE.
        </h1>
        <p className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Less talk. More make.
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-gray-700 tracking-tight">
          We make culture-ready work worth interrupting your calendar for.
        </p>
        <button 
          onClick={scrollToContact}
          className="mt-8 bg-black text-white font-bold py-3 px-8 text-sm uppercase tracking-widest hover:bg-[#4EA8FF] transition-colors duration-300"
        >
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default Hero;