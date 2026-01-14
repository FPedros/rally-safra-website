import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp } from 'lucide-react';
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
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { PrivacyNotice } from './components/PrivacyNotice';
import { EBOOK_DOWNLOAD_URL, MOCK_POSTS } from './constants';
import { BlogPost } from './types';

type View = 'home' | 'blog' | 'post' | 'historia' | 'privacidade';

const SITE_URL = 'https://www.rallydasafra.com.br';
const BASE_PATH = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
const SITE_ROOT = `${SITE_URL}${BASE_PATH}`;
const SITE_ROOT_SLASH = SITE_ROOT.endsWith('/') ? SITE_ROOT : `${SITE_ROOT}/`;
const SITE_NAME = 'Rally da Safra';
const DEFAULT_TITLE = `${SITE_NAME} | Expedicao tecnica do agro brasileiro`;
const DEFAULT_DESCRIPTION =
  'Rally da Safra e a maior expedicao tecnica do agro brasileiro, com dados de produtividade, clima e mercado de soja e milho.';
const DEFAULT_IMAGE = `${SITE_ROOT}/hero/msedge_yqQmmDG2Vd.png`;
const LOGO_IMAGE = `${SITE_ROOT}/hero/marca2026-colorida.svg`;
const TWITTER_HANDLE = '@rallydasafra';
const SOCIAL_LINKS = [
  'https://www.instagram.com/rallydasafra/',
  'https://www.facebook.com/rallydasafra',
  'https://www.youtube.com/user/rallydasafra',
  'https://x.com/rallydasafra',
  'https://www.tiktok.com/@rallydasafra',
  'https://www.linkedin.com/company/rally-da-safra/',
];
const BLOG_API_BASE = 'https://darkorange-tiger-296251.hostingersite.com/wp-json/wp/v2/posts';
const BLOG_PER_PAGE = 12;
const BLOG_CACHE_KEY = 'rallydasafra_posts_cache_v1';
const BLOG_CACHE_TTL_MS = 1000 * 60 * 10;

const normalizeDescription = (value: string, maxLength = 160) => {
  const trimmed = value.replace(/\s+/g, ' ').trim();
  if (trimmed.length <= maxLength) return trimmed;
  const slice = trimmed.slice(0, Math.max(0, maxLength - 3));
  return `${slice.replace(/\s+\S*$/, '')}...`;
};

const upsertMetaTag = (options: { name?: string; property?: string; content?: string }) => {
  if (typeof document === 'undefined') return;
  const { name, property, content } = options;
  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  const existing = document.querySelector(selector) as HTMLMetaElement | null;
  if (!content) {
    if (existing) existing.remove();
    return;
  }
  const tag = existing || document.createElement('meta');
  if (!existing) {
    if (name) tag.setAttribute('name', name);
    if (property) tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const upsertLinkTag = (rel: string, href: string, attributes: Record<string, string> = {}) => {
  if (typeof document === 'undefined') return;
  const selector = `link[rel="${rel}"]${Object.entries(attributes)
    .map(([key, value]) => `[${key}="${value}"]`)
    .join('')}`;
  const existing = document.querySelector(selector) as HTMLLinkElement | null;
  const link = existing || document.createElement('link');
  if (!existing) {
    link.setAttribute('rel', rel);
    Object.entries(attributes).forEach(([key, value]) => link.setAttribute(key, value));
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

const upsertJsonLd = (data: Record<string, unknown>) => {
  if (typeof document === 'undefined') return;
  const scriptId = 'seo-jsonld';
  const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
  const script = existing || document.createElement('script');
  if (!existing) {
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

const LandingPage: React.FC<{
  onNavigate: (view: View, sectionId?: string) => void;
  onOpenPost: (postId: number | null, originPage?: number) => void;
  posts: BlogPost[];
  loading: boolean;
}> = ({ onNavigate, onOpenPost, posts, loading }) => {
  const assetBase = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');
  const logoMarcaColorida = `${assetBase}hero/marca2026-colorida.png`;
  const edicaoImage = `${assetBase}edicao.png`;
  const edicaoFallback = `${assetBase}nossa-historia.webp`;

  return (
    <>
      <Hero />
      <div id="hero-end" className="h-px w-full" />
      <section className="bg-light-sand text-dark-green py-12">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] border border-khaki/30 rounded-3xl p-8 md:p-10 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-raw-umber mb-2">Edição</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold">Rally da Safra 2026</h2>
                <p className="text-gray-600 mt-2 max-w-2xl">
                  A próxima jornada já tem data: a edição 2026 traz novas rotas, tecnologias e descobertas pelo agro brasileiro.
                </p>
                <div className="mt-4">
                  <a
                    href={EBOOK_DOWNLOAD_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-raw-umber via-hunter-green to-dark-green text-white font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all overflow-hidden"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-300 via-hunter-green to-raw-umber opacity-70 blur-sm animate-[spin_6s_linear_infinite]"></span>
                    <span className="relative z-10">Veja a apresentação do projeto</span>
                    <span className="relative z-10 text-xs bg-white/20 px-2 py-1 rounded-full">Download</span>
                  </a>
                </div>
              </div>
              <img
                src={edicaoImage}
                alt="Edição Rally da Safra"
                className="h-28 md:h-36 w-auto drop-shadow-lg rounded-2xl object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (target.src !== edicaoFallback) target.src = edicaoFallback;
                }}
              />
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
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState<boolean>(true);
  const [hasLoadedAllPosts, setHasLoadedAllPosts] = useState<boolean>(false);
  const postsRef = useRef<BlogPost[]>([]);
  const totalPagesRef = useRef<number>(1);
  const isFetchingAllRef = useRef<boolean>(false);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [blogPage, setBlogPage] = useState<number>(1);
  const [scrollToPostId, setScrollToPostId] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showPrivacyNotice, setShowPrivacyNotice] = useState(false);
  const privacyPath = '/politica-privacidade';
  const legacyPrivacyPath = '/poitica-privacidade';

  useEffect(() => {
    const normalizePath = (path: string) => (path || '/').replace(/\/+$/, '') || '/';
    const getViewFromPath = (path: string): View => {
      const normalized = normalizePath(path);
      if (normalized === privacyPath || normalized === legacyPrivacyPath) return 'privacidade';
      return 'home';
    };

    const syncViewWithPath = () => {
      const view = getViewFromPath(window.location.pathname);
      setCurrentView(view);
    };

    syncViewWithPath();
    window.addEventListener('popstate', syncViewWithPath);
    return () => window.removeEventListener('popstate', syncViewWithPath);
  }, []);

  const updatePath = (view: View) => {
    if (view === 'privacidade') {
      if (window.location.pathname !== privacyPath) {
        window.history.pushState({}, '', privacyPath);
      }
      return;
    }
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
  };

  useEffect(() => {
    postsRef.current = posts;
  }, [posts]);

  const normalizeCategory = (cat?: string) => {
    const c = (cat || '').toLowerCase();
    if (c.includes('evento')) return 'Eventos';
    if (c.includes('ebook') || c.includes('e-book')) return 'E-book';
    if (c.includes('newsletter')) return 'Newsletter';
    return 'Not¡cias';
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || '').trim();
  };

  const mapPost = (post: any): BlogPost => {
    const media = post._embedded?.['wp:featuredmedia']?.[0];
    const imageUrl = media?.source_url || media?.media_details?.sizes?.medium?.source_url || '';
    const categoryRaw = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Blog';
    const parsedDate = post.date ? new Date(post.date) : new Date();
    const dateISO = parsedDate.toISOString();
    const modifiedISO = post.modified ? new Date(post.modified).toISOString() : dateISO;
    return {
      id: post.id,
      title: stripHtml(post.title?.rendered || ''),
      excerpt: stripHtml(post.excerpt?.rendered || ''),
      date: parsedDate.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }),
      dateISO,
      modifiedISO,
      imageUrl,
      url: post.link || '#',
      category: normalizeCategory(categoryRaw),
      content: post.content?.rendered || '',
    };
  };

  const sortPosts = (items: BlogPost[]) =>
    [...items].sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());

  const mergePosts = (current: BlogPost[], incoming: BlogPost[]) => {
    const map = new Map<number, BlogPost>();
    current.forEach((post) => map.set(post.id, post));
    incoming.forEach((post) => {
      const existing = map.get(post.id);
      map.set(post.id, existing ? { ...existing, ...post } : post);
    });
    return sortPosts(Array.from(map.values()));
  };

  const readCachedPosts = () => {
    try {
      const raw = localStorage.getItem(BLOG_CACHE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw) as { timestamp?: number; posts?: BlogPost[]; loadedAll?: boolean };
      if (!parsed?.timestamp || !Array.isArray(parsed.posts)) return null;
      if (Date.now() - parsed.timestamp > BLOG_CACHE_TTL_MS) return null;
      return { posts: parsed.posts, loadedAll: Boolean(parsed.loadedAll) };
    } catch {
      return null;
    }
  };

  const writeCachedPosts = (items: BlogPost[], loadedAll: boolean) => {
    try {
      const payload = { timestamp: Date.now(), posts: items, loadedAll };
      localStorage.setItem(BLOG_CACHE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore cache write errors.
    }
  };

  const fetchPostsPage = async (page: number, signal?: AbortSignal) => {
    const params = new URLSearchParams({
      per_page: String(BLOG_PER_PAGE),
      page: String(page),
      _embed: '1',
    });
    const res = await fetch(`${BLOG_API_BASE}?${params.toString()}`, { signal });
    if (!res.ok) {
      throw new Error(`Erro ao carregar posts (HTTP ${res.status})`);
    }
    const data = await res.json();
    const headerTotalPages = res.headers.get('X-WP-TotalPages');
    const totalPages = headerTotalPages ? Number(headerTotalPages) : 1;
    totalPagesRef.current = Math.max(totalPagesRef.current, totalPages);
    return { posts: data.map(mapPost), totalPages };
  };

  const loadInitialPosts = async (signal: AbortSignal, hadCache: boolean) => {
    if (!hadCache) {
      setLoadingPosts(true);
    }
    try {
      const { posts: pagePosts, totalPages } = await fetchPostsPage(1, signal);
      if (signal.aborted) return;
      totalPagesRef.current = totalPages;
      const merged = mergePosts(postsRef.current, pagePosts);
      setPosts(merged);
      postsRef.current = merged;
      setHasLoadedAllPosts((previous) => previous || totalPages <= 1);
      writeCachedPosts(merged, totalPages <= 1);
    } catch (err) {
      if (signal.aborted) return;
      console.error('Erro ao carregar posts do WordPress', err);
      if (!hadCache) {
        const fallback = MOCK_POSTS.map((p) => ({ ...p, category: normalizeCategory(p.category) }));
        setPosts(fallback);
        postsRef.current = fallback;
        writeCachedPosts(fallback, true);
        setHasLoadedAllPosts(true);
      }
    } finally {
      if (!signal.aborted) {
        setLoadingPosts(false);
      }
    }
  };

  const loadAllPosts = async () => {
    if (isFetchingAllRef.current || hasLoadedAllPosts) return;
    const totalPages = totalPagesRef.current;
    if (totalPages <= 1) {
      setHasLoadedAllPosts(true);
      return;
    }
    isFetchingAllRef.current = true;
    setLoadingPosts(true);
    try {
      const pages = Array.from({ length: totalPages - 1 }, (_, index) => index + 2);
      const chunkSize = 3;
      const fetched: BlogPost[] = [];
      for (let i = 0; i < pages.length; i += chunkSize) {
        const chunk = pages.slice(i, i + chunkSize);
        const results = await Promise.all(chunk.map((page) => fetchPostsPage(page)));
        results.forEach((result) => {
          fetched.push(...result.posts);
        });
      }
      if (fetched.length > 0) {
        const merged = mergePosts(postsRef.current, fetched);
        setPosts(merged);
        postsRef.current = merged;
        writeCachedPosts(merged, true);
      } else {
        writeCachedPosts(postsRef.current, true);
      }
      setHasLoadedAllPosts(true);
    } catch (err) {
      console.error('Erro ao carregar todas as paginas do blog', err);
    } finally {
      isFetchingAllRef.current = false;
      setLoadingPosts(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const cache = readCachedPosts();
    const hadCache = Boolean(cache?.posts?.length);
    if (cache) {
      setPosts(cache.posts);
      postsRef.current = cache.posts;
      setHasLoadedAllPosts(cache.loadedAll);
      setLoadingPosts(!hadCache);
    } else {
      setLoadingPosts(true);
    }
    loadInitialPosts(controller.signal, hadCache);
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (currentView !== 'blog') return;
    if (hasLoadedAllPosts) return;
    if (loadingPosts) return;
    loadAllPosts();
  }, [currentView, hasLoadedAllPosts, loadingPosts]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const privacyNoticeKey = 'rallydasafra_privacy_notice_ack';

  useEffect(() => {
    try {
      const stored = localStorage.getItem(privacyNoticeKey);
      if (!stored) setShowPrivacyNotice(true);
    } catch {
      setShowPrivacyNotice(true);
    }
  }, [privacyNoticeKey]);

  useEffect(() => {
    const selectedPost = currentView === 'post' ? posts.find((post) => post.id === selectedPostId) || null : null;
    const viewForSeo: View = currentView === 'post' && !selectedPost ? 'blog' : currentView;
    const canonicalUrl = viewForSeo === 'privacidade' ? `${SITE_ROOT}${privacyPath}` : SITE_ROOT_SLASH;
    const titleByView: Record<View, string> = {
      home: DEFAULT_TITLE,
      blog: `Blog | ${SITE_NAME}`,
      post: DEFAULT_TITLE,
      historia: `Nossa Historia | ${SITE_NAME}`,
      privacidade: `Politica de Privacidade | ${SITE_NAME}`,
    };
    const descriptionByView: Record<View, string> = {
      home: DEFAULT_DESCRIPTION,
      blog: 'Noticias, insights e bastidores do Rally da Safra com dados de produtividade, clima e mercado.',
      post: DEFAULT_DESCRIPTION,
      historia: 'Conheca a historia do Rally da Safra e a maior expedicao tecnica do agro brasileiro.',
      privacidade: 'Saiba como o Rally da Safra coleta e trata dados pessoais.',
    };
    const pageTitle = selectedPost ? `${selectedPost.title} | ${SITE_NAME}` : titleByView[viewForSeo];
    const rawDescription = selectedPost?.excerpt || descriptionByView[viewForSeo] || DEFAULT_DESCRIPTION;
    const pageDescription = normalizeDescription(rawDescription);
    const pageImage = selectedPost?.imageUrl || DEFAULT_IMAGE;
    const ogType = selectedPost ? 'article' : 'website';

    document.title = pageTitle;
    upsertMetaTag({ name: 'description', content: pageDescription });
    upsertMetaTag({ property: 'og:title', content: pageTitle });
    upsertMetaTag({ property: 'og:description', content: pageDescription });
    upsertMetaTag({ property: 'og:type', content: ogType });
    upsertMetaTag({ property: 'og:url', content: canonicalUrl });
    upsertMetaTag({ property: 'og:image', content: pageImage });
    upsertMetaTag({ property: 'og:image:alt', content: selectedPost?.title || SITE_NAME });
    upsertMetaTag({ property: 'og:updated_time', content: selectedPost?.modifiedISO });

    upsertMetaTag({ name: 'twitter:card', content: 'summary_large_image' });
    upsertMetaTag({ name: 'twitter:site', content: TWITTER_HANDLE });
    upsertMetaTag({ name: 'twitter:title', content: pageTitle });
    upsertMetaTag({ name: 'twitter:description', content: pageDescription });
    upsertMetaTag({ name: 'twitter:image', content: pageImage });

    upsertMetaTag({ property: 'article:published_time', content: selectedPost?.dateISO });
    upsertMetaTag({ property: 'article:modified_time', content: selectedPost?.modifiedISO });
    upsertMetaTag({ property: 'article:section', content: selectedPost?.category });

    upsertLinkTag('canonical', canonicalUrl);
    upsertLinkTag('alternate', canonicalUrl, { hreflang: 'pt-BR' });

    const organizationId = `${SITE_ROOT}/#organization`;
    const websiteId = `${SITE_ROOT}/#website`;
    const webpageId = `${canonicalUrl}#webpage`;
    const jsonLdGraph: Array<Record<string, unknown>> = [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: SITE_NAME,
        url: SITE_ROOT_SLASH,
        logo: {
          '@type': 'ImageObject',
          url: LOGO_IMAGE,
        },
        sameAs: SOCIAL_LINKS,
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_ROOT_SLASH,
        name: SITE_NAME,
        inLanguage: 'pt-BR',
        publisher: {
          '@id': organizationId,
        },
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: canonicalUrl,
        name: pageTitle,
        description: pageDescription,
        inLanguage: 'pt-BR',
        isPartOf: {
          '@id': websiteId,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: pageImage,
        },
      },
    ];

    if (selectedPost) {
      jsonLdGraph.push({
        '@type': 'BlogPosting',
        '@id': `${canonicalUrl}#blogposting`,
        headline: selectedPost.title,
        description: normalizeDescription(selectedPost.excerpt || DEFAULT_DESCRIPTION),
        image: [pageImage],
        datePublished: selectedPost.dateISO,
        dateModified: selectedPost.modifiedISO,
        author: {
          '@id': organizationId,
        },
        publisher: {
          '@id': organizationId,
        },
        mainEntityOfPage: {
          '@id': webpageId,
        },
      });
    }

    upsertJsonLd({
      '@context': 'https://schema.org',
      '@graph': jsonLdGraph,
    });
  }, [currentView, selectedPostId, posts, privacyPath]);

  const handleNavigate = (view: View, sectionId?: string) => {
    if (view === 'blog') {
      setBlogPage(1);
    }
    setCurrentView(view);
    updatePath(view);
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

  const handleOpenPost = (postId: number | null, originPage?: number) => {
    if (typeof originPage === 'number') {
      setBlogPage(originPage);
    } else {
      setBlogPage(1);
    }
    setSelectedPostId(postId);
    if (postId !== null) {
      setCurrentView('post');
      window.scrollTo(0, 0);
    }
  };

  const handleBackToBlog = () => {
    if (selectedPostId) setScrollToPostId(selectedPostId);
    setCurrentView('blog');
  };

  const handleSelectCategory = (category: string) => {
    setCategoryFilter(category);
    setBlogPage(1);
    setSelectedPostId(null);
    setCurrentView('blog');
    window.scrollTo(0, 0);
  };

  const handlePrivacyNoticeDismiss = () => {
    try {
      localStorage.setItem(privacyNoticeKey, new Date().toISOString());
    } catch {
      // Ignore storage errors to avoid blocking dismissal.
    }
    setShowPrivacyNotice(false);
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
            onCategorySelect={handleSelectCategory}
            scrollToPostId={scrollToPostId}
            initialPage={blogPage}
            onPageChange={setBlogPage}
            onScrollHandled={() => setScrollToPostId(null)}
          />
        ) : currentView === 'historia' ? (
          <NossaHistoria />
        ) : currentView === 'privacidade' ? (
          <PrivacyPolicy onNavigate={handleNavigate} />
        ) : (
          <BlogPostDetail postId={selectedPostId} posts={posts} onBack={handleBackToBlog} />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
      {showPrivacyNotice && currentView !== 'privacidade' && (
        <PrivacyNotice onNavigate={handleNavigate} onDismiss={handlePrivacyNoticeDismiss} />
      )}
      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-[150] p-3 rounded-full bg-gradient-to-r from-hunter-green to-raw-umber text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          aria-label="Voltar para o topo"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default App;



