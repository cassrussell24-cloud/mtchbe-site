import React from 'react';
import { LinkedInIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white py-20 glass-panel">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
          Cancel the call.
          <br />
          Let’s make something.
        </h2>
        <a href="mailto:hello@mtchbe.com" className="mt-8 inline-block text-xl md:text-2xl font-medium text-white relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-[#4EA8FF] after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100">
          hello@mtchbe.com
        </a>
        <div className="mt-12 flex justify-center space-x-6">
          <a href="https://www.linkedin.com/company/mtchbe/about/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#4EA8FF] transition-colors"><LinkedInIcon /></a>
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8 text-sm text-gray-500">
          <p>&copy; 2025 MTCHBE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;