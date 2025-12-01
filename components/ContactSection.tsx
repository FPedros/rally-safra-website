import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { FormData } from '../types';

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

  return (
    <section id="contato" className="py-24 bg-dark-green text-white relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Info Column */}
          <div>
            <h2 className="font-heading text-4xl font-bold mb-6">Fale Conosco</h2>
            <p className="text-gray-200 mb-10 text-lg">
              Tem alguma dúvida sobre o Rally da Safra ou quer saber como patrocinar? Entre em contato com a nossa equipe.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-khaki" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-khaki">Nosso Escritório</h4>
                  <p className="text-gray-300">Av. Brigadeiro Faria Lima, 1234<br/>São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-khaki" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-khaki">Email</h4>
                  <p className="text-gray-300">contato@rallydasafra.com.br</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-khaki" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-khaki">Telefone</h4>
                  <p className="text-gray-300">+55 (11) 3000-0000</p>
                </div>
              </div>
            </div>
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
                  <option value="duvidas">Dúvidas Gerais</option>
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