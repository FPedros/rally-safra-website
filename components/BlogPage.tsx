import React, { useEffect, useState } from 'react';
import { Calendar, Clock, User, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost } from '../types';

interface BlogPageProps {
  selectedPostId: number | null;
  onOpenPost: (postId: number | null, originPage?: number) => void;
  posts: BlogPost[];
  loading?: boolean;
  categoryFilter?: string | null;
  onCategorySelect?: (category: string | null) => void;
  scrollToPostId?: number | null;
  onScrollHandled?: () => void;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  selectedPostId,
  onOpenPost,
  posts,
  loading,
  categoryFilter,
  onCategorySelect,
  scrollToPostId,
  onScrollHandled,
  initialPage,
  onPageChange,
}) => {
  const filteredPosts = categoryFilter ? posts.filter((p) => p.category === categoryFilter) : posts;
  const heroPost = filteredPosts[0];
  const secondPost = filteredPosts[1];
  const listPosts = filteredPosts.slice(2); // remove destaque e segundo destaque da lista principal

  const [currentPage, setCurrentPage] = useState<number>(initialPage || 1);
  const pageSize = 6;

  const totalPages = Math.max(1, Math.ceil(Math.max(listPosts.length, 0) / pageSize));
  const pagePosts = listPosts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  useEffect(() => {
    setCurrentPage(initialPage || 1);
  }, [initialPage]);

  const handleOpen = (postId: number) => {
    onOpenPost(postId, currentPage);
  };

  const handlePageChange = (page: number, opts?: { skipScroll?: boolean }) => {
    const clamped = Math.min(Math.max(page, 1), totalPages);
    if (clamped === currentPage) return;
    setCurrentPage(clamped);
    onPageChange?.(clamped);
    if (!opts?.skipScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
      onPageChange?.(totalPages);
    }
  }, [currentPage, totalPages, onPageChange]);

  useEffect(() => {
    if (!scrollToPostId) return;

    const findPageForPost = (postId: number) => {
      if (heroPost?.id === postId || secondPost?.id === postId) return 1;
      const indexInList = listPosts.findIndex((p) => p.id === postId);
      if (indexInList === -1) return null;
      return Math.floor(indexInList / pageSize) + 1;
    };

    const targetPage = findPageForPost(scrollToPostId);
    if (targetPage && targetPage !== currentPage) {
      setCurrentPage(targetPage);
      onPageChange?.(targetPage);
      return;
    }

    const el = document.getElementById(`post-card-${scrollToPostId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    onScrollHandled?.();
  }, [scrollToPostId, onScrollHandled, onPageChange, heroPost, secondPost, listPosts, currentPage]);

  return (
    <div className="bg-[#f4f1ea] min-h-screen pt-32 pb-14">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Hero block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8">
            <div id={heroPost ? `post-card-${heroPost.id}` : undefined} className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-dark-green via-hunter-green to-raw-umber text-white">
              {heroPost && (
                <>
                  <img
                    src={heroPost.imageUrl}
                    alt={heroPost.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </>
              )}
              <div className="relative p-10 md:p-16">
                <div className="flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-wide mb-4">
                  <span className="bg-white/15 px-3 py-1 rounded-full border border-white/20 flex items-center gap-2">
                    <User size={16} /> Equipe Rally
                  </span>
                  {heroPost && (
                    <>
                      <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20 flex items-center gap-2">
                        <Calendar size={16} /> {heroPost.date}
                      </span>
                      <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20">
                        {heroPost.category}
                      </span>
                    </>
                  )}
                </div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4 drop-shadow">
                  {heroPost ? heroPost.title : 'Conteúdo em breve'}
                </h1>
                <p className="text-white/90 text-lg md:text-xl max-w-3xl mb-6">
                  {heroPost ? heroPost.excerpt : 'Acompanhe as últimas análises da expedição pelo Brasil.'}
                </p>
                {heroPost && (
                  <button
                    onClick={() => handleOpen(heroPost.id)}
                    className="inline-flex items-center gap-2 bg-white text-dark-green font-bold px-6 py-3 rounded-full shadow-lg hover:translate-y-[-1px] transition-all"
                  >
                    Ler matéria completa
                    <ChevronRight size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            {secondPost && (
              <div
                id={`post-card-${secondPost.id}`}
                className="h-full bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col cursor-pointer hover:shadow-2xl transition-shadow"
                onClick={() => handleOpen(secondPost.id)}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={secondPost.imageUrl}
                    alt={secondPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-raw-umber text-white text-xs font-bold px-3 py-1 rounded-full">
                    Destaque
                  </span>
                  <span className="absolute top-3 right-3 bg-white/90 text-dark-green text-xs font-bold px-3 py-1 rounded-full">
                    {secondPost.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <div className="flex items-center gap-3 text-xs text-gray-500 font-semibold">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {secondPost.date}</span>
                  </div>
                  <h3 className="font-heading text-2xl text-dark-green font-bold leading-snug hover:text-hunter-green transition-colors">
                    {secondPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {secondPost.excerpt}
                  </p>
                  <div className="mt-auto inline-flex items-center text-sm font-bold text-raw-umber hover:translate-x-1 transition-transform">
                    Ler matéria <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Rest of posts */}
        <div className="mt-10">
          <div className="w-full bg-white/70 backdrop-blur rounded-3xl border border-khaki/30 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.45)] p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold tracking-[0.28em] uppercase text-raw-umber">Leia Mais</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-dark-green">Explorando a Safra</h3>
                  {onCategorySelect && (
                    <div className="flex items-center gap-3 flex-wrap">
                      <select
                        value={categoryFilter || ''}
                        onChange={(e) => onCategorySelect(e.target.value || null)}
                        className="border border-gray-300 rounded-full px-4 py-2 text-sm text-dark-green bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-hunter-green focus:border-transparent"
                      >
                        <option value="">Todas as categorias</option>
                        {Array.from(new Set(posts.map((p) => p.category))).sort().map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                      {categoryFilter && (
                        <button
                          onClick={() => onCategorySelect(null)}
                          className="text-sm font-semibold text-raw-umber underline underline-offset-4"
                        >
                          Limpar filtro
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
              {loading && <span className="text-sm text-gray-500">Carregando...</span>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pagePosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  id={`post-card-${post.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 flex flex-col cursor-pointer relative"
                  onClick={() => handleOpen(post.id)}
                >
                  <span className="absolute top-3 right-3 bg-raw-umber text-white text-[11px] font-bold px-3 py-1 rounded-full z-10 shadow">
                    {post.category}
                  </span>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-grow">
                    <div className="flex items-center gap-3 text-xs text-gray-500 font-semibold">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    </div>
                    <h4 className="font-heading text-xl text-dark-green font-bold leading-snug group-hover:text-hunter-green transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto inline-flex items-center text-sm font-bold text-raw-umber group-hover:translate-x-1 transition-transform">
                      Ler matéria <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 rounded-full border text-sm font-semibold ${
                    currentPage === 1 ? 'text-gray-400 border-gray-200 cursor-not-allowed' : 'text-dark-green border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  Anterior
                </button>
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const page = idx + 1;
                  const isActive = page === currentPage;
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-full font-bold ${
                        isActive
                          ? 'bg-hunter-green text-white shadow'
                          : 'bg-white text-dark-green border border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 rounded-full border text-sm font-semibold ${
                    currentPage === totalPages ? 'text-gray-400 border-gray-200 cursor-not-allowed' : 'text-dark-green border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  Próxima
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

