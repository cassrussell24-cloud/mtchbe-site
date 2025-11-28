
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  { id: 1, title: 'Project One', category: 'Campaign', summary: '', imageUrl: 'https://picsum.photos/seed/project1/800/1000' },
  { id: 2, title: 'Project Two', category: 'Strategy', summary: '', imageUrl: 'https://picsum.photos/seed/project2/800/1000' },
  { id: 3, title: 'Project Three', category: 'Content', summary: '', imageUrl: 'https://picsum.photos/seed/project3/800/1000' },
];

const Work: React.FC = () => {
  return (
    <section id="work" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id}>
              <div className="overflow-hidden bg-gray-200">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover aspect-[4/5]" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-center md:text-left">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
