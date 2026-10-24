import React from 'react';
import {
  HeartStraight,
  ArrowUp,
} from '@phosphor-icons/react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-rose-950 text-rose-100 border-t border-rose-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-rose-800/60">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center">
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
            <p className="text-sm text-rose-200/85 max-w-md leading-relaxed">
              Um movimento de mobilização social, educação em saúde e cuidado
              com a vida — reforçando a importância da informação, da prevenção
              e do diagnóstico precoce do câncer de mama e do colo do útero.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-rose-300">
              Navegação Rápida
            </h3>
            <ul className="space-y-2 text-sm text-rose-100/85">
              <li>
                <a href="#topo" className="hover:text-white transition-colors">
                  Início da Campanha
                </a>
              </li>
              <li>
                <a href="#prevencao" className="hover:text-white transition-colors">
                  Pilares da Prevenção & SUS
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
              <li>
                <a href="#especialistas" className="hover:text-white transition-colors">
                  Vozes & Especialistas
                </a>
              </li>
              <li>
                <a href="#campanha" className="hover:text-white transition-colors">
                  Alunas & Grupos de Trabalho
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-rose-300">
              Orientação Importante
            </h3>
            <p className="text-xs text-rose-200/80 leading-relaxed">
              As informações deste portal possuem caráter estritamente educativo e
              de conscientização em saúde pública. Ao notar qualquer alteração,
              procure uma Unidade Básica de Saúde (SUS) ou médico de confiança.
            </p>
            <a
              href="#topo"
              className="inline-flex items-center gap-2 pt-2 text-xs font-semibold text-rose-200 hover:text-white transition-colors"
            >
              <ArrowUp size={15} weight="bold" />
              <span>Voltar ao topo da página</span>
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rose-300/80">
          <p className="flex items-center gap-1.5">
            <span>Projeto Educativo Outubro Rosa</span>
            <HeartStraight size={14} weight="fill" className="text-rose-400" />
            <span>Prevenção, Conscientização e Cuidado com a Mulher</span>
          </p>
          <p className="font-mono-num text-[11px]">
            Outubro Rosa • Juntas pela Vida
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
