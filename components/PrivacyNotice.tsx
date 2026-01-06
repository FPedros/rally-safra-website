import React from 'react';

type PrivacyNoticeProps = {
  onNavigate?: (view: 'home' | 'blog' | 'post' | 'historia' | 'privacidade', sectionId?: string) => void;
  onDismiss: () => void;
};

export const PrivacyNotice: React.FC<PrivacyNoticeProps> = ({ onNavigate, onDismiss }) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-[160]">
      <div className="mx-auto max-w-4xl rounded-2xl border border-khaki/40 bg-white/95 p-5 shadow-[0_25px_60px_-35px_rgba(16,40,32,0.6)] backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-raw-umber">Aviso de Privacidade</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Ao acessar este site, voce confirma que leu e concorda com o nosso Aviso de Privacidade e com a forma como
              tratamos seus dados pessoais.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {onNavigate && (
              <button
                type="button"
                onClick={() => onNavigate('privacidade')}
                className="inline-flex items-center justify-center rounded-full border border-raw-umber/30 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-raw-umber transition-colors hover:bg-khaki/20"
              >
                Ler aviso
              </button>
            )}
            <button
              type="button"
              onClick={onDismiss}
              className="inline-flex items-center justify-center rounded-full bg-dark-green px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition-colors hover:bg-hunter-green"
            >
              Entendi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
