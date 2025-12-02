import React, { useState } from 'react';
import { Send, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { FormData } from '../types';

const TikTokIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M168 24h-32v120c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32s14.327-32 32-32c4.42 0 8.64.9 12.48 2.52V96.27c-4.08-.6-8.2-.92-12.48-.92-35.346 0-64 28.654-64 64s28.654 64 64 64c35.262 0 64-28.738 64-64V114.3c10.43 7.43 23.2 11.7 36.88 11.7V96c-12.75-.04-24.64-4.45-33.85-12.65C168.96 72.47 168 61.77 168 51.68V24z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

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
      href: 'https://x.com/i/flow/login?redirect_after_login=%2Frallydasafra',
      color: 'from-[#1DA1F2] to-[#0f75bd]',
      Icon: Twitter,
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
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Redes Sociais / Conteudo */}
          <div>
            <h2 className="font-heading text-4xl font-bold mb-6">Siga o Rally</h2>
            <p className="text-gray-200 mb-8 text-lg">
              Conteudo oficial, bastidores das etapas e novidades em tempo real. Escolha a sua rede favorita e acompanhe o Rally da Safra.
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
              Prefere falar diretamente com a equipe? Deixe sua mensagem ao lado que retornaremos em breve.
            </p>
          </div>

          {/* Form Column */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-dark-green mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Nome</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-hunter-green focus:border-transparent transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">E-mail</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-hunter-green focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Telefone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-hunter-green focus:border-transparent transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Assunto</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-hunter-green focus:border-transparent transition-all"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="imprensa">Assessoria de Imprensa</option>
                  <option value="patrocinio">Quero Patrocinar</option>
                  <option value="duvidas">Duvidas Gerais</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Mensagem</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-hunter-green focus:border-transparent transition-all"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button 
                type="submit" 
                disabled={status !== 'idle'}
                className="w-full bg-raw-umber hover:bg-cafe-noir text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'idle' && (
                  <>
                    Enviar Mensagem <Send className="w-5 h-5" />
                  </>
                )}
                {status === 'submitting' && 'Enviando...'}
                {status === 'success' && 'Mensagem Enviada!'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
