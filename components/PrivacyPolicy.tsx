import React from 'react';

type PolicySection = {
  number: string;
  title: string;
  text: string[];
  bullets?: string[];
};

type PrivacyPolicyProps = {
  onNavigate?: (view: 'home' | 'blog' | 'post' | 'historia' | 'privacidade', sectionId?: string) => void;
};

const sections: PolicySection[] = [
  {
    number: '01',
    title: 'Escopo e objetivo',
    text: [
      'Esta Política de Privacidade descreve como o Rally da Safra trata dados pessoais quando você navega em nosso site, interage com conteúdos ou utiliza nossos canais oficiais.',
      'O documento se aplica às informações fornecidas diretamente por você e às informações coletadas automaticamente durante a navegação.',
    ],
  },
  {
    number: '02',
    title: 'Dados que podemos coletar',
    text: ['Dependendo da sua interação com o site, podemos coletar:'],
    bullets: [
      'Dados de contato, como nome, e-mail, organização, cidade e mensagem enviada.',
      'Dados de navegação, como endereço IP, tipo de dispositivo, navegador, páginas acessadas e tempo de permanência.',
      'Preferências e consentimentos relacionados a comunicações e materiais de conteúdo.',
    ],
  },
  {
    number: '03',
    title: 'Como usamos as informações',
    text: ['Utilizamos os dados pessoais para finalidades legítimas e específicas, tais como:'],
    bullets: [
      'Responder solicitações enviadas por formulário, e-mail ou canais oficiais.',
      'Enviar comunicações e materiais do Rally da Safra, quando você autoriza.',
      'Melhorar nossos conteúdos, experiências digitais e a qualidade das informações publicadas.',
      'Cumprir obrigações legais, regulatórias ou solicitações de autoridades competentes.',
    ],
  },
  {
    number: '04',
    title: 'Compartilhamento e operadores',
    text: [
      'Podemos compartilhar dados com fornecedores e parceiros que apoiam nossas operações, sempre sob compromisso de confidencialidade e segurança.',
      'Nunca comercializamos dados pessoais. Compartilhamentos ocorrem apenas quando necessários para entregar serviços solicitados ou cumprir exigências legais.',
    ],
  },
  {
    number: '05',
    title: 'Cookies e tecnologias semelhantes',
    text: [
      'Utilizamos cookies e tecnologias similares para melhorar o desempenho do site e compreender padrões de navegação.',
      'Você pode gerenciar cookies nas configurações do seu navegador e, em alguns casos, recusar cookies não essenciais.',
    ],
    bullets: [
      'Cookies essenciais: necessários para o funcionamento básico do site.',
      'Cookies de desempenho: ajudam a entender como os visitantes utilizam as páginas.',
    ],
  },
  {
    number: '06',
    title: 'Armazenamento e segurança',
    text: [
      'Adotamos medidas técnicas e administrativas para proteger os dados pessoais contra acesso não autorizado, perda ou uso indevido.',
      'Mantemos as informações pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei.',
    ],
  },
  {
    number: '07',
    title: 'Seus direitos (LGPD)',
    text: [
      'Você pode solicitar a confirmação da existência de tratamento, acesso, correção, anonimização, portabilidade, eliminação de dados e revogação de consentimento.',
      'Para exercer seus direitos, entre em contato por meio do nosso formulário disponível no site.',
    ],
    bullets: [
      'Confirmação e acesso aos dados.',
      'Correção de dados incompletos, inexatos ou desatualizados.',
      'Eliminação ou anonimização, quando aplicável.',
      'Revogação de consentimento e informações sobre compartilhamentos.',
    ],
  },
  {
    number: '08',
    title: 'Links externos e páginas de terceiros',
    text: [
      'Nosso site pode conter links para páginas externas, como formulários de inscrição e redes sociais.',
      'Ao acessar esses serviços, você estará sujeito às políticas de privacidade dos respectivos provedores.',
    ],
  },
  {
    number: '09',
    title: 'Atualizações desta política',
    text: [
      'Podemos atualizar esta Política de Privacidade a qualquer momento para refletir melhorias, mudanças legais ou novas funcionalidades.',
      'Recomendamos revisar este conteúdo periodicamente.',
    ],
  },
];

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  return (
    <section id="privacidade" className="relative min-h-screen overflow-hidden bg-light-sand text-dark-green pt-28 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(202,186,156,0.25),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(76,100,68,0.15),transparent_40%),radial-gradient(circle_at_10%_80%,rgba(138,98,64,0.18),transparent_45%)]" />
      <div className="absolute -top-20 right-[-10%] w-[28rem] h-[28rem] bg-khaki/30 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-20%] left-[-12%] w-[30rem] h-[30rem] bg-emerald-300/20 blur-[160px] rounded-full" />

      <div className="relative container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 border border-khaki/40 text-xs font-bold uppercase tracking-[0.35em] text-raw-umber shadow-sm">
            Política de Privacidade
          </div>
          <h1 className="mt-5 font-heading text-4xl md:text-5xl font-bold text-dark-green leading-tight">
            Transparência sobre o uso de dados
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Respeitamos a sua privacidade e tratamos dados pessoais com responsabilidade. Abaixo você encontra
            informações claras sobre quais dados podem ser coletados, por que coletamos e como protegemos suas
            informações.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-gray-500">
            <span className="px-3 py-1 rounded-full bg-white/90 border border-khaki/30">Atualizado em 05/01/2026</span>
            <span className="px-3 py-1 rounded-full bg-white/90 border border-khaki/30">LGPD</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: 'Transparência',
              text: 'Explicamos de forma objetiva como as informações são tratadas no site do Rally da Safra.',
            },
            {
              title: 'Segurança',
              text: 'Adotamos medidas para reduzir riscos e proteger os dados pessoais sob nossa responsabilidade.',
            },
            {
              title: 'Controle',
              text: 'Você pode solicitar acesso, correção ou exclusão de dados conforme a LGPD.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/90 border border-khaki/30 rounded-2xl p-5 shadow-[0_20px_50px_-35px_rgba(16,40,32,0.45)]"
            >
              <h3 className="font-heading text-xl font-bold text-dark-green">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6">
          {sections.map((section) => (
            <article
              key={section.title}
              className="bg-white/90 border border-khaki/30 rounded-3xl p-6 md:p-7 shadow-[0_24px_60px_-40px_rgba(16,40,32,0.4)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-raw-umber to-hunter-green text-white font-bold flex items-center justify-center shadow-lg">
                  {section.number}
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark-green">{section.title}</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                {section.text.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {section.bullets.map((item) => (
                      <li key={item} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-dark-green text-white rounded-3xl p-6 md:p-8 shadow-[0_30px_70px_-40px_rgba(16,40,32,0.6)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-heading text-2xl font-bold">Precisa falar com a equipe?</h3>
              <p className="mt-2 text-gray-200 text-sm leading-relaxed">
                Para exercer seus direitos ou tirar dúvidas sobre privacidade, utilize o formulário de contato
                disponível no site.
              </p>
            </div>
            {onNavigate ? (
              <button
                type="button"
                onClick={() => onNavigate('home', 'contato')}
                className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold tracking-wide hover:bg-white/20 transition-colors"
              >
                Fale com a gente
              </button>
            ) : (
              <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold tracking-wide">
                Fale com a gente
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
