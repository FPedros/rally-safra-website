import React, { useEffect } from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

declare global {
  interface Window {
    RDStationForms?: new (id: string, token: string) => { createForm: () => void };
  }
}

const TikTokIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M168 24h-32v120c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32s14.327-32 32-32c4.42 0 8.64.9 12.48 2.52V96.27c-4.08-.6-8.2-.92-12.48-.92-35.346 0-64 28.654-64 64s28.654 64 64 64c35.262 0 64-28.738 64-64V114.3c10.43 7.43 23.2 11.7 36.88 11.7V96c-12.75-.04-24.64-4.45-33.85-12.65C168.96 72.47 168 61.77 168 51.68V24z" />
  </svg>
);

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 1200 1227" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M714.163 519.284L1160.89 0h-105.74L671.03 442.72 427.697 0H0l468.211 810.405L0 1226.99h105.74L529.259 762.75l256.704 464.24H1200L714.163 519.284z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  useEffect(() => {
    const formId = 'newsletter-rallydasafra-b9ac60da8f734314c843';
    const token = 'UA-73363960-1';
    const scriptId = 'rdstation-forms-script';

    const initForm = () => {
      const container = document.getElementById(formId);
      if (!container) return;
      if (container.children.length > 0) return; // evita recriar se ja montou

      if (window.RDStationForms) {
        try {
          new window.RDStationForms(formId, token).createForm();
        } catch (error) {
          console.error('Erro ao iniciar o RD Station Forms', error);
        }
      }
    };

    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (script && window.RDStationForms) {
      initForm();
      return;
    }

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
      script.async = true;
      document.body.appendChild(script);
    }

    script.addEventListener('load', initForm);

    return () => {
      script?.removeEventListener('load', initForm);
    };
  }, []);

  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@rallydasafra',
      href: 'https://www.instagram.com/rallydasafra/',
      color: 'from-[#f58529] via-[#dd2a7b] to-[#8134af]',
      Icon: Instagram,
    },
    {
      name: 'Facebook',
      handle: '/rallydasafra',
      href: 'https://www.facebook.com/rallydasafra',
      color: 'from-[#1877F2] to-[#0f5dc1]',
      Icon: Facebook,
    },
    {
      name: 'YouTube',
      handle: '/rallydasafra',
      href: 'https://www.youtube.com/user/rallydasafra',
      color: 'from-[#ff0000] to-[#b30000]',
      Icon: Youtube,
    },
    {
      name: 'X (Twitter)',
      handle: '@rallydasafra',
      href: 'https://x.com/rallydasafra',
      color: 'from-[#111] to-[#333]',
      Icon: XIcon,
    },
    {
      name: 'TikTok',
      handle: '@rallydasafra',
      href: 'https://www.tiktok.com/@rallydasafra',
      color: 'from-[#69C9D0] to-[#EE1D52]',
      Icon: TikTokIcon,
    },
  ];

  return (
    <section id="contato" className="py-24 bg-dark-green text-white relative">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-heading text-4xl font-bold mb-6">Siga o Rally</h2>
            <p className="text-gray-200 mb-8 text-lg">
              Conteúdo oficial, bastidores das etapas e novidades em tempo real. Escolha a sua rede favorita e acompanhe o Rally da Safra.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {socialLinks.map(({ name, handle, href, color, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-200">Siga no {name}</p>
                      <p className="font-semibold text-white">{handle}</p>
                    </div>
                  </div>
                  <span className="text-khaki font-bold text-sm group-hover:translate-x-1 transition-transform">Seguir</span>
                </a>
              ))}
            </div>

            <p className="text-sm text-gray-300 mt-6">
              Prefere falar diretamente com a equipe? Envie uma mensagem pelas redes sociais e retornaremos em breve.
            </p>
          </div>

          <div className="rounded-2xl p-8 border border-white/10 bg-white/5 shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-2">Inscreva-se na newsletter do Rally</h3>
            <p className="text-gray-200 mb-6">
              Receba novidades e os bastidores das etapas diretamente no seu e-mail.
            </p>
            <div id="newsletter-rallydasafra-b9ac60da8f734314c843" role="main" className="newsletter-embed" />
          </div>
        </div>
      </div>
    </section>
  );
};

