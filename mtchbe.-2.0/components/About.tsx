
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-[#F7F6F3]">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-4xl font-medium leading-tight md:leading-snug">
            We’re a creative studio built for the modern attention span.
            <br className="hidden sm:block" />
            No calls, no fluff—just ideas that move faster than meetings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
