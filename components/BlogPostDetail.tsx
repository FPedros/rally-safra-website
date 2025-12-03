import React, { useEffect, useMemo } from 'react';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { BlogPost } from '../types';

interface DetailProps {
  postId: number | null;
  posts: BlogPost[];
  onBack: () => void;
}

export const BlogPostDetail: React.FC<DetailProps> = ({ postId, posts, onBack }) => {
  const post = useMemo(() => posts.find((p) => p.id === postId) || null, [postId, posts]);

  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;
      const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY);
      const threshold = 60;
      if (isHorizontal && deltaX > threshold) {
        onBack();
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onBack]);

  if (!post) {
    return (
      <div className="bg-[#f4f1ea] min-h-screen pt-32 pb-14">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-dark-green font-bold mb-6 hover:text-raw-umber">
            <ArrowLeft size={18} /> Voltar
          </button>
          <div className="bg-white rounded-3xl shadow p-10 text-center text-gray-600">
            Postagem não encontrada.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f4f1ea] min-h-screen pt-32 pb-14">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-dark-green text-white mb-8">
          <img src={post.imageUrl} alt={post.title} className="absolute inset-0 w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="relative p-8 md:p-12 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wide">
              <span className="bg-white/15 px-3 py-1 rounded-full border border-white/20">{post.category}</span>
              <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20 flex items-center gap-2">
                <Calendar size={14} /> {post.date}
              </span>
              <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20 flex items-center gap-2">
                <User size={14} /> Equipe Rally
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">{post.title}</h1>
            <p className="text-white/85 text-lg max-w-4xl">{post.excerpt}</p>
          </div>
        </div>

        <article className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12 text-gray-800 leading-relaxed prose max-w-none">
          {post.content.split('\n\n').map((para, idx) => (
            <p key={idx} className="text-lg mb-4">
              {para}
            </p>
          ))}
        </article>

        <div className="mt-8 flex justify-center">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-white bg-hunter-green hover:bg-dark-green font-bold px-6 py-3 rounded-full shadow-lg transition-colors">
            <ArrowLeft size={18} /> Voltar ao Blog
          </button>
        </div>
      </div>
    </div>
  );
};
