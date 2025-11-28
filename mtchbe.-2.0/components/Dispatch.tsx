
import React from 'react';
import { DispatchPost } from '../types';

const posts: DispatchPost[] = [
  { id: 1, title: 'The Death of the Deck', imageUrl: 'https://picsum.photos/seed/dispatch1/600/600' },
  { id: 2, title: 'Cultural Input / Output', imageUrl: 'https://picsum.photos/seed/dispatch2/600/600' },
  { id: 3, title: 'Meme as a Medium', imageUrl: 'https://picsum.photos/seed/dispatch3/600/600' },
];

const Dispatch: React.FC = () => {
  return (
    <section id="dispatch" className="py-20 sm:py-32 bg-[#F7F6F3]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Dispatch.</h2>
        <p className="mt-4 text-lg text-gray-700">Studio lenses. No agenda.</p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-cover aspect-square transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mt-4 text-xl font-bold group-hover:text-[#4EA8FF] transition-colors">{post.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dispatch;
