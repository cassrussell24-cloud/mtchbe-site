
import React from 'react';
import { Capability } from '../types';
import { CreativeIcon, StrategyIcon, ContentIcon, PublisherIcon } from './Icons';

const capabilities: Capability[] = [
  { id: 1, title: 'Creative & Campaigns', description: 'Big ideas that ignore the rules of advertising.', icon: <CreativeIcon /> },
  { id: 2, title: 'Cultural Strategy', description: 'Finding your brand’s place in the conversation.', icon: <StrategyIcon /> },
  { id: 3, title: 'Content Studio', description: 'Always-on content that feels native, not needy.', icon: <ContentIcon /> },
  { id: 4, title: 'Publisher Arm', description: 'Building owned media platforms that attract an audience.', icon: <PublisherIcon /> },
];

const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What we actually do.</h2>
          <p className="mt-4 text-lg text-gray-700">Instead of sitting in meetings, of course.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-px bg-gray-200">
          {capabilities.map((capability) => (
            <div key={capability.id} className="bg-white p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10">{capability.icon}</div>
                  <h3 className="ml-6 text-2xl font-bold">{capability.title}</h3>
                </div>
                <p className="mt-4 sm:mt-0 sm:ml-6 text-gray-600 max-w-xs">{capability.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
