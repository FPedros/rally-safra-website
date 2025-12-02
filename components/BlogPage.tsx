import React from 'react';
import { MOCK_POSTS } from '../constants';
import { Calendar, Clock, User, ChevronRight, Search, TrendingUp, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

export const BlogPage: React.FC = () => {
  const featuredPost = MOCK_POSTS[0];
  const secondaryPosts = MOCK_POSTS.slice(1, 3);
  const remainingPosts = MOCK_POSTS.slice(3);

  const categories = ["Milho", "Soja", "Algodão", "Tecnologia", "Mercado", "Clima", "Sustentabilidade"];
  const popularTags = ["Safra 23/24", "El Niño", "Produtividade", "Agro 4.0", "Exportação"];

  return (
    <div className="bg-[#f4f1ea] min-h-screen pt-24 pb-20">
      
      {/* Header Section */}
      <div className="container mx-auto px-6 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-hunter-green font-bold tracking-[0.2em] text-sm uppercase mb-3">Rally da Safra</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-dark-green mb-6">
            Diário de Campo<span className="text-raw-umber text-6xl">.</span>
          </h1>
          <div className="h-1 w-24 bg-raw-umber mx-auto rounded-full"></div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        
        {/* Main Featured Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main Hero Post (Left - 8 cols) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:col-span-8 group cursor-pointer"
          >
            <div className="relative h-[500px] rounded-xl overflow-hidden mb-6 shadow-xl">
              <img 
                src={featuredPost.imageUrl} 
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white w-full">
                <span className="bg-raw-umber text-white text-xs font-bold px-3 py-1 rounded mb-4 inline-block uppercase tracking-wider">
                  {featuredPost.category}
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 leading-tight group-hover:text-khaki transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-200 text-lg md:text-xl line-clamp-2 max-w-3xl font-sans font-light">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 mt-6 text-sm text-gray-300 font-sans">
                  <span className="flex items-center gap-2"><User size={16} /> Equipe Rally</span>
                  <span className="flex items-center gap-2"><Calendar size={16} /> {featuredPost.date}</span>
                  <span className="flex items-center gap-2"><Clock size={16} /> 5 min de leitura</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Featured (Right - 4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {secondaryPosts.map((post, idx) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="flex-1 bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all border border-stone-100 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-dark-green text-xs font-bold px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-dark-green mb-3 leading-snug group-hover:text-raw-umber transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                  </div>
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-wider flex justify-between items-center">
                    <span>{post.date}</span>
                    <ChevronRight size={16} className="text-raw-umber" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Content Grid with Sidebar */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Feed */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-8 border-b-2 border-hunter-green pb-4">
              <h3 className="font-heading text-2xl font-bold text-dark-green uppercase tracking-wide">
                Últimas Notícias
              </h3>
            </div>

            <div className="space-y-8">
              {remainingPosts.map((post, idx) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group"
                >
                  <div className="md:w-1/3 h-52 md:h-auto overflow-hidden rounded-lg relative shrink-0">
                     <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col justify-center flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-raw-umber font-bold text-xs uppercase tracking-wider">{post.category}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="text-gray-400 text-xs">{post.date}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-dark-green mb-3 group-hover:text-hunter-green transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <a href={post.url} className="inline-flex items-center text-sm font-bold text-dark-green hover:text-raw-umber transition-colors uppercase tracking-wide">
                      Ler Artigo Completo <ChevronRight size={16} className="ml-1" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination Mock */}
            <div className="mt-12 flex justify-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-hunter-green text-white font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-dark-green hover:bg-gray-100 font-bold border border-gray-200">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-dark-green hover:bg-gray-100 font-bold border border-gray-200">3</button>
              <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-dark-green hover:bg-gray-100 font-bold border border-gray-200"><ChevronRight size={16} /></button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-10">
            
            {/* Search Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar notícias..." 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-hunter-green text-sm"
                />
                <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
              </div>
            </div>

            {/* Newsletter Widget */}
            <div className="bg-dark-green text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-khaki/20 rounded-full translate-x-10 -translate-y-10 blur-xl"></div>
               <h4 className="font-serif text-2xl font-bold mb-2 relative z-10">Rally News</h4>
               <p className="text-gray-300 text-sm mb-6 relative z-10">Receba as análises exclusivas da safra diretamente no seu e-mail.</p>
               <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 mb-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-khaki"
                />
                <button className="w-full bg-khaki text-dark-green font-bold py-3 rounded-lg text-sm hover:bg-white transition-colors">
                  Inscrever-se
                </button>
            </div>

            {/* Categories Widget */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="font-heading text-lg font-bold text-dark-green mb-6 flex items-center gap-2">
                <TrendingUp size={20} className="text-raw-umber" /> Categorias
              </h4>
              <ul className="space-y-3">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <a href="#" className="flex justify-between items-center text-gray-600 hover:text-hunter-green group transition-colors">
                      <span className="font-medium">{cat}</span>
                      <span className="bg-gray-100 text-xs font-bold px-2 py-1 rounded text-gray-400 group-hover:bg-hunter-green/10 group-hover:text-hunter-green transition-colors">
                        {Math.floor(Math.random() * 20) + 5}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="font-heading text-lg font-bold text-dark-green mb-6 flex items-center gap-2">
                <Tag size={20} className="text-raw-umber" /> Tópicos em Alta
              </h4>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, idx) => (
                  <a key={idx} href="#" className="bg-gray-50 text-gray-600 text-xs font-bold px-3 py-2 rounded-lg border border-gray-100 hover:bg-raw-umber hover:text-white hover:border-raw-umber transition-all">
                    #{tag}
                  </a>
                ))}
              </div>
            </div>

          </aside>
        </section>

      </div>
    </div>
  );
};