import React from 'react';
import { MOCK_POSTS } from '../constants';
import { Calendar, ChevronRight } from 'lucide-react';

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-2">Blog do Rally</h2>
            <p className="text-gray-500">Notícias e atualizações direto do campo</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-amazon-green font-semibold hover:underline">
            Ver todas as notícias <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_POSTS.map((post) => (
            <article key={post.id} className="flex flex-col group h-full">
              <div className="relative overflow-hidden rounded-xl mb-4 h-56">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-amazon-green text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Notícia
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-800 mb-3 group-hover:text-cerrado-brown transition-colors">
                  {post.title}
                </h3>
                <p className="font-sans text-gray-600 mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <a 
                  href={post.url} 
                  className="inline-block mt-auto text-amazon-green font-bold text-sm uppercase tracking-wide border-b-2 border-transparent hover:border-amazon-green w-fit transition-all"
                >
                  Leia mais
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="bg-white border-2 border-gray-200 text-gray-700 font-bold py-3 px-8 rounded-full hover:bg-gray-50 transition-colors w-full">
            Ver todas as notícias
          </button>
        </div>
      </div>
    </section>
  );
};
