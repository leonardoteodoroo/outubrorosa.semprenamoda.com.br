import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Sparkle,
  ArrowDownRight,
  Stethoscope,
  HandHeart,
  CalendarCheck,
  HeartStraight,
} from '@phosphor-icons/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring' as const, stiffness: 110, damping: 20 },
  },
};

const MARQUEE_ITEMS = [
  'Prevenção Primária',
  'Diagnóstico Precoce Salva Vidas',
  'Autoconhecimento das Mamas',
  'Mamografia no SUS',
  'Vacinação contra o HPV',
  'Exame Papanicolau',
  'Cuidado Integral com a Mulher',
];

export const HeroSection: React.FC = () => {
  return (
    <section
      id="topo"
      className="relative pt-4 pb-10 sm:pt-8 sm:pb-16 lg:pt-12 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#fdf8f9] via-rose-50/45 to-[#fdf8f9]"
    >
      {/* Orbes de luz animados suavemente no fundo */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 24, -16, 0],
          y: [0, -18, 12, 0],
          scale: [1, 1.06, 0.96, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 sm:w-[30rem] sm:h-[30rem] rounded-full bg-rose-200/50 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -28, 18, 0],
          y: [0, 20, -14, 0],
          scale: [1, 0.95, 1.07, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-1/4 -right-20 w-72 h-72 sm:w-[26rem] sm:h-[26rem] rounded-full bg-pink-200/45 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Coluna Esquerda: Conteúdo Editorial calibrado para caber na dobra mobile */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="font-display text-[1.75rem] sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-zinc-900 leading-[1.08]"
            >
              Transformar <span className="text-rose-700">informação</span> em
              prevenção é um gesto de cuidado com a vida.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-3 sm:mt-5 text-xs sm:text-base lg:text-lg text-zinc-600 leading-relaxed max-w-[60ch]"
            >
              O <strong className="font-semibold text-zinc-900">Outubro Rosa</strong>{' '}
              lembra a importância de olhar com carinho para a própria saúde o ano
              inteiro — unindo{' '}
              <span className="text-rose-800 font-medium">escolhas saudáveis</span>,{' '}
              <span className="text-rose-800 font-medium">diagnóstico precoce</span> e{' '}
              <span className="text-rose-800 font-medium">acesso ao tratamento</span>{' '}
              do câncer de mama e do colo do útero.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-4 sm:mt-7 flex flex-row flex-wrap items-center gap-2.5 sm:gap-3.5 w-full"
            >
              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="#autoexame"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-rose-700 hover:bg-rose-800 text-white font-semibold text-xs sm:text-sm shadow-[0_14px_28px_-10px_rgba(190,18,60,0.45)] transition-colors"
              >
                <HandHeart size={18} weight="duotone" className="shrink-0" />
                <span>5 Passos do Autoexame</span>
                <ArrowDownRight size={15} weight="bold" className="shrink-0" />
              </motion.a>

              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="#especialistas"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-white/90 hover:bg-rose-50 text-zinc-800 border border-rose-200/80 font-semibold text-xs sm:text-sm transition-colors shadow-2xs"
              >
                <Stethoscope size={17} weight="duotone" className="text-rose-700 shrink-0" />
                <span>Especialistas & Alunas</span>
              </motion.a>
            </motion.div>

            {/* Métricas do SUS em grade de 3 colunas mesmo no mobile para economizar altura */}
            <motion.div
              variants={itemVariants}
              className="mt-5 sm:mt-9 w-full grid grid-cols-3 gap-2 sm:gap-4"
            >
              <div className="p-2.5 sm:p-4 rounded-2xl bg-white/80 border border-rose-200/60 shadow-2xs">
                <div className="flex items-center gap-1 text-rose-700 font-mono-num text-xs sm:text-lg font-bold tracking-tight">
                  <CalendarCheck size={16} weight="duotone" className="shrink-0 hidden sm:inline" />
                  <span>40–49 anos</span>
                </div>
                <p className="mt-1 text-[10px] sm:text-xs text-zinc-600 leading-tight sm:leading-snug">
                  Mamografia no SUS por decisão conjunta.
                </p>
              </div>

              <div className="p-2.5 sm:p-4 rounded-2xl bg-white/80 border border-rose-200/60 shadow-2xs">
                <div className="flex items-center gap-1 text-rose-700 font-mono-num text-xs sm:text-lg font-bold tracking-tight">
                  <ShieldCheck size={16} weight="duotone" className="shrink-0 hidden sm:inline" />
                  <span>50–74 anos</span>
                </div>
                <p className="mt-1 text-[10px] sm:text-xs text-zinc-600 leading-tight sm:leading-snug">
                  Rastreamento preventivo a cada <strong className="text-zinc-800">2 anos</strong>.
                </p>
              </div>

              <div className="p-2.5 sm:p-4 rounded-2xl bg-white/80 border border-rose-200/60 shadow-2xs">
                <div className="flex items-center gap-1 text-rose-700 font-mono-num text-xs sm:text-lg font-bold tracking-tight">
                  <Sparkle size={16} weight="duotone" className="shrink-0 hidden sm:inline" />
                  <span>25–64 anos</span>
                </div>
                <p className="mt-1 text-[10px] sm:text-xs text-zinc-600 leading-tight sm:leading-snug">
                  Papanicolau preventivo a cada <strong className="text-zinc-800">3 anos</strong>.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna Direita: Card Visual com Movimento Flutuante Suave */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 95, damping: 20, delay: 0.12 }}
            className="lg:col-span-5 relative"
          >
            <div className="ambient-float relative rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-rose-100/90 via-rose-50/75 to-white border border-rose-200/80 shadow-[0_22px_50px_-15px_rgba(136,19,55,0.14)] pt-4 sm:pt-6 px-4 sm:px-6 pb-0 overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute top-8 left-1/2 -translate-x-1/2 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-rose-300/35 blur-2xl"
              />

              <div className="relative z-10 flex items-center justify-between mb-2 sm:mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-rose-200/70 text-[11px] font-semibold text-rose-800 shadow-2xs">
                  <img
                    src="/images/campanha/laco-rosa.png"
                    alt=""
                    width={15}
                    height={15}
                    className="w-3.5 h-3.5 object-contain"
                  />
                  Juntas pela Prevenção
                </span>
                <span className="font-mono-num text-[10px] sm:text-[11px] font-semibold text-rose-700 bg-rose-100/80 px-2.5 py-0.5 rounded-full">
                  OUTUBRO ROSA
                </span>
              </div>

              {/* Imagem Candidata LCP — compactada no mobile para caber na 1ª dobra */}
              <div className="relative z-10 flex justify-center">
                <img
                  src="/images/campanha/mulheres-abracadas.png"
                  alt="Cinco mulheres diversas sorrindo e abraçadas vestindo camisetas cor-de-rosa com o laço da campanha Outubro Rosa"
                  {...({ fetchpriority: 'high' } as React.ImgHTMLAttributes<HTMLImageElement>)}
                  decoding="sync"
                  width={900}
                  height={900}
                  className="w-full max-w-[240px] sm:max-w-[360px] lg:max-w-[410px] h-auto object-contain select-none"
                />
              </div>

              <div className="relative z-20 -mx-4 sm:-mx-6 px-4 sm:px-6 py-3 sm:py-3.5 bg-rose-900/95 text-white flex items-center justify-between gap-3">
                <p className="text-[11px] sm:text-xs font-medium text-rose-50 leading-snug">
                  <strong className="text-rose-200 font-semibold">Amor próprio:</strong>{' '}
                  incentive quem você ama a realizar os exames preventivos.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Faixa Cinética Suave (Marquee) integrando o Hero à próxima seção */}
        <div className="mt-8 sm:mt-12 overflow-hidden rounded-2xl bg-white/65 border border-rose-200/50 py-2.5 backdrop-blur-xs">
          <div className="marquee-track items-center gap-6 text-xs font-semibold text-rose-800/85">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((text, idx) => (
              <span key={idx} className="inline-flex items-center gap-2.5 whitespace-nowrap px-1">
                <HeartStraight size={13} weight="fill" className="text-rose-500" />
                <span>{text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
