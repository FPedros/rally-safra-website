import React from 'react';
import { Calendar, ArrowUpRight, ArrowRight, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onNavigate: (view: 'home' | 'blog') => void;
  onOpenPost: (postId: number | null, originPage?: number) => void;
  posts: BlogPost[];
  loading?: boolean;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onNavigate, onOpenPost, posts, loading }) => {
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1, 7);

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-white to-light-sand relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-khaki/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-hunter-green/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-hunter-green font-bold tracking-wider text-sm uppercase mb-2 block">
              Notícias & Insights
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark-green leading-tight">
              Diário de Bordo <span className="text-raw-umber">.</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Acompanhe as últimas atualizações, análises técnicas e os bastidores da nossa expedição pelo Brasil.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('blog')} 
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-dark-green font-bold hover:bg-dark-green hover:text-white transition-all shadow-sm group"
          >
            Ver todo o blog
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Featured Post Card */}
        {featuredPost && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-12 rounded-3xl overflow-hidden shadow-2xl bg-white group hover:shadow-3xl transition-shadow duration-500"
        >
          {/* Image Side - Spans 7 cols */}
          <div className="lg:col-span-7 relative h-80 lg:h-[500px] overflow-hidden">
            <div className="absolute inset-0 bg-dark-green/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
            <img 
              src={featuredPost.imageUrl} 
              alt={featuredPost.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute top-6 left-6 z-20 flex gap-2">
              <span className="bg-white/90 backdrop-blur-sm text-dark-green font-bold px-4 py-2 rounded-lg text-sm shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-raw-umber animate-pulse"></span>
                Destaque
              </span>
              <span className="bg-hunter-green/90 backdrop-blur-sm text-white font-bold px-4 py-2 rounded-lg text-sm shadow-lg">
                {featuredPost.category}
              </span>
            </div>
          </div>
          
          {/* Content Side - Spans 5 cols */}
          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center bg-dark-green text-white relative overflow-hidden">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-hunter-green/30 rounded-full translate-x-1/3 -translate-y-1/3 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-raw-umber/20 rounded-full -translate-x-1/3 translate-y-1/3 blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-center text-khaki mb-6 font-semibold text-sm tracking-widest uppercase">
                <Calendar className="w-4 h-4 mr-2" />
                {featuredPost.date}
              </div>
              
              <h3 className="font-heading text-3xl lg:text-4xl font-bold mb-6 leading-tight group-hover:text-khaki transition-colors duration-300">
                {featuredPost.title}
              </h3>
              
              <p className="text-gray-300 mb-8 text-lg leading-relaxed line-clamp-4">
                {featuredPost.excerpt}
              </p>
              
              <button onClick={() => onOpenPost(featuredPost.id)} className="inline-flex items-center text-white font-bold text-lg group/btn">
                Ler matéria completa
                <span className="ml-3 bg-white/10 p-2 rounded-full group-hover/btn:bg-khaki group-hover/btn:text-dark-green transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
        )}

        {/* Grid of Other Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:-translate-y-1"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge on Image */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur text-dark-green text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow relative">
                {/* Date and Category Line */}
                <div className="flex justify-between items-center mb-4">
                   <div className="flex items-center text-raw-umber text-xs font-bold uppercase tracking-wider">
                     <Bookmark className="w-3 h-3 mr-1" />
                     {post.category}
                   </div>
                   <div className="flex items-center text-gray-400 text-xs font-semibold">
                     <Calendar className="w-3 h-3 mr-1" />
                     {post.date}
                   </div>
                </div>
                
                <h3 className="font-heading text-xl font-bold text-dark-green mb-3 line-clamp-2 leading-tight group-hover:text-hunter-green transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                  <button onClick={() => onOpenPost(post.id)} className="text-dark-green font-bold text-sm flex items-center group/link">
                    Ler mais 
                    <ArrowUpRight className="w-3 h-3 ml-1 text-raw-umber group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </button>
                  <div className="w-8 h-1 bg-gray-200 rounded-full group-hover:bg-raw-umber transition-colors duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <button 
            onClick={() => onNavigate('blog')}
            className="w-full bg-white border border-gray-300 text-dark-green font-bold py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
          >
            Ver todas as notícias
          </button>
        </div>
      </div>
    </section>
  );
};

