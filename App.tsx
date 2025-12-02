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
import { MOCK_POSTS } from './constants';
import { BlogPost } from './types';

type View = 'home' | 'blog' | 'post';

const LandingPage: React.FC<{ onNavigate: (view: View, sectionId?: string) => void; onOpenPost: (postId: number | null) => void; posts: BlogPost[]; loading: boolean }> = ({ onNavigate, onOpenPost, posts, loading }) => {
  return (
    <>
      <Hero />
      <div id="hero-end" className="h-px w-full" />
      <HistorySection />
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

  useEffect(() => {
    const fetchPosts = async () => {
      const normalizeCategory = (cat?: string) => {
        const c = (cat || '').toLowerCase();
        if (c.includes('evento')) return 'Eventos';
        if (c.includes('ebook') || c.includes('e-book')) return 'E-book';
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

        const mapped: BlogPost[] = allPosts.map((post: any) => {
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
            content: stripHtml(post.content?.rendered || '')
          };
        }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
    if (view !== 'post') {
      setSelectedPostId(null);
    }
    
    if (view === 'home') {
      if (sectionId) {
        // If navigating to a section, wait for render then scroll
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

  return (
    <div className="antialiased text-gray-800 bg-light-sand font-sans">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      <main>
        {currentView === 'home' ? (
          <LandingPage onNavigate={handleNavigate} onOpenPost={handleOpenPost} posts={posts} loading={loadingPosts} />
        ) : currentView === 'blog' ? (
          <BlogPage selectedPostId={selectedPostId} onOpenPost={handleOpenPost} posts={posts} loading={loadingPosts} />
        ) : (
          <BlogPostDetail postId={selectedPostId} posts={posts} onBack={() => handleNavigate('blog')} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
