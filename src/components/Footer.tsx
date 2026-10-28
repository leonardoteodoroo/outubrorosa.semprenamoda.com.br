import React from 'react';
import {
  HeartStraight,
  ArrowUp,
} from '@phosphor-icons/react';

export const Footer: React.FC = () => {
  return (
    <footer className="panel-metallic-pink text-pink-50 border-t border-pink-300/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/20">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-white/15 border border-white/25 flex items-center justify-center">
                <img
                  src="/images/campanha/laco-branco.png"
                  alt=""
                  width={22}
                  height={22}
                  className="w-5 h-5 object-contain"
                />
              </span>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Campanha Outubro Rosa
              </span>
            </div>
            <p className="text-sm text-pink-50/90 max-w-md leading-relaxed">
              Um movimento de mobilização social, educação em saúde e cuidado
              com a vida — reforçando a importância da informação, da prevenção
              e do diagnóstico precoce do câncer de mama.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-pink-100">
              Navegação Rápida
            </h3>
            <ul className="space-y-2 text-sm text-pink-50/90">
              <li>
                <a href="#topo" className="hover:text-white transition-colors">
                  Início da Campanha
                </a>
              </li>
              <li>
                <a href="#prevencao" className="hover:text-white transition-colors">
                  Prevenção & Mamografia
                </a>
              </li>
              <li>
                <a href="#autoexame" className="hover:text-white transition-colors">
                  Passo a Passo do Autoexame
                </a>
              </li>
              <li>
                <a href="#mitos" className="hover:text-white transition-colors">
                  Mito ou Verdade
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-pink-100">
              Orientação Importante
            </h3>
            <p className="text-xs text-pink-50/85 leading-relaxed">
              As informações deste portal possuem caráter estritamente educativo e
              de conscientização em saúde. Ao notar qualquer alteração nas mamas,
              procure uma unidade de saúde ou médico de confiança.
            </p>
            <a
              href="#topo"
              className="inline-flex items-center gap-2 pt-2 text-xs font-semibold text-white hover:text-pink-100 transition-colors"
            >
              <ArrowUp size={15} weight="bold" />
              <span>Voltar ao topo da página</span>
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pink-100/90">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>Projeto Educativo Outubro Rosa</span>
            <HeartStraight size={14} weight="fill" className="text-pink-200 shrink-0" />
            <span>Prevenção, Conscientização e Cuidado com a Mulher</span>
          </p>
          <p className="flex items-center gap-1.5 text-[11px] text-pink-100/95">
            <span>Feito com amor por</span>
            <HeartStraight size={12} weight="fill" className="text-pink-200 shrink-0" />
            <a
              href="https://www.instagram.com/leonardoteodoro.of/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold tracking-wide text-white underline decoration-pink-200/70 underline-offset-4 hover:text-pink-100 transition-colors"
            >
              LEONARDO TEODORO
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
