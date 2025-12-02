import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HistorySection } from './components/HistorySection';
import { SponsorsSection } from './components/SponsorsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BlogPage } from './components/BlogPage';
import { BlogPostDetail } from './components/BlogPostDetail';
import { NossaHistoria } from './components/NossaHistoria';
import { MOCK_POSTS } from './constants';
import { BlogPost } from './types';

type View = 'home' | 'blog' | 'post' | 'historia';

const LandingPage: React.FC<{
  onNavigate: (view: View, sectionId?: string) => void;
  onOpenPost: (postId: number | null) => void;
  posts: BlogPost[];
  loading: boolean;
}> = ({ onNavigate, onOpenPost, posts, loading }) => {
  const assetBase = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');
  const logoMarcaColorida = `${assetBase}hero/marca2026-colorida.png`;

  return (
    <>
      <Hero />
      <div id="hero-end" className="h-px w-full" />
      <section className="bg-light-sand text-dark-green py-12">
        <div className="container mx-auto px-6">
          <div className="bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] border border-khaki/30 rounded-3xl p-8 md:p-10 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-raw-umber mb-2">Edição</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold">Rally da Safra 2026</h2>
                <p className="text-gray-600 mt-2 max-w-2xl">
                  A proxima jornada ja tem data: a edição 2026 traz novas rotas, tecnologias e descobertas pelo agro brasileiro.
                </p>
              </div>
              <img src={logoMarcaColorida} alt="Rally da Safra" className="h-30 md:h-40 w-auto drop-shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      <HistorySection onNavigate={() => onNavigate('historia')} />
      <SponsorsSection />
      <BlogSection onNavigate={onNavigate} onOpenPost={onOpenPost} posts={posts} loading={loading} />
      <ContactSection />
    </>
  );
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>(MOCK_POSTS);
  const [loadingPosts, setLoadingPosts] = useState<boolean>(false);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const normalizeCategory = (cat?: string) => {
        const c = (cat || '').toLowerCase();
        if (c.includes('evento')) return 'Eventos';
        if (c.includes('ebook') || c.includes('e-book')) return 'E-book';
        if (c.includes('newsletter')) return 'Newsletter';
        return 'Noticias';
      };
      const stripHtml = (html: string) => {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return (tmp.textContent || tmp.innerText || '').trim();
      };

      try {
        setLoadingPosts(true);
        const perPage = 20;
        let page = 1;
        let totalPages = 1;
        const allPosts: any[] = [];

        while (page <= totalPages) {
          const res = await fetch(`https://rallydasafra.com.br/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&_embed`);
          if (!res.ok) break;
          const data = await res.json();
          const headerTotalPages = res.headers.get('X-WP-TotalPages');
          totalPages = headerTotalPages ? Number(headerTotalPages) : 1;
          allPosts.push(...data);
          page += 1;
        }

        const mapped: BlogPost[] = allPosts
          .map((post: any) => {
            const media = post._embedded?.['wp:featuredmedia']?.[0];
            const imageUrl = media?.source_url || media?.media_details?.sizes?.medium?.source_url || '';
            const categoryRaw = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Blog';
            return {
              id: post.id,
              title: stripHtml(post.title?.rendered || ''),
              excerpt: stripHtml(post.excerpt?.rendered || ''),
              date: new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }),
              imageUrl,
              url: post.link || '#',
              category: normalizeCategory(categoryRaw),
              content: stripHtml(post.content?.rendered || ''),
            };
          })
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        if (mapped.length > 0) setPosts(mapped);
      } catch (err) {
        console.error('Erro ao carregar posts do WordPress', err);
        setPosts(MOCK_POSTS.map((p) => ({ ...p, category: normalizeCategory(p.category) })));
      } finally {
        setLoadingPosts(false);
      }
    };
    fetchPosts();
  }, []);

  const handleNavigate = (view: View, sectionId?: string) => {
    setCurrentView(view);
    if (view !== 'blog') setCategoryFilter(null);
    if (view !== 'post') {
      setSelectedPostId(null);
    }

    if (view === 'home') {
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  };

  const handleOpenPost = (postId: number | null) => {
    setSelectedPostId(postId);
    if (postId !== null) {
      setCurrentView('post');
      window.scrollTo(0, 0);
    }
  };

  const handleSelectCategory = (category: string) => {
    setCategoryFilter(category);
    setSelectedPostId(null);
    setCurrentView('blog');
    window.scrollTo(0, 0);
  };

  return (
    <div className="antialiased text-gray-800 bg-light-sand font-sans">
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        categories={Array.from(new Set(posts.map((p) => p.category))).sort()}
        onSelectCategory={handleSelectCategory}
      />
      <main>
        {currentView === 'home' ? (
          <LandingPage onNavigate={handleNavigate} onOpenPost={handleOpenPost} posts={posts} loading={loadingPosts} />
        ) : currentView === 'blog' ? (
          <BlogPage
            selectedPostId={selectedPostId}
            onOpenPost={handleOpenPost}
            posts={posts}
            loading={loadingPosts}
            categoryFilter={categoryFilter}
          />
        ) : currentView === 'historia' ? (
          <NossaHistoria />
        ) : (
          <BlogPostDetail postId={selectedPostId} posts={posts} onBack={() => handleNavigate('blog')} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
