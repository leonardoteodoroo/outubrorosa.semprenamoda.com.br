import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Sparkle,
  ArrowDownRight,
  Question,
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
  'Mamografia Preventiva',
  'Hábitos Saudáveis Diários',
  'Atenção aos Sinais de Alerta',
  'Cuidado Integral com a Mulher',
];

export const HeroSection: React.FC = () => {
  return (
    <section
      id="topo"
      className="relative pt-4 pb-10 sm:pt-8 sm:pb-16 lg:pt-12 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#fdf8f9] via-pink-50/50 to-[#fdf8f9]"
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
        className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 sm:w-[30rem] sm:h-[30rem] rounded-full bg-pink-200/50 blur-3xl"
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
              Transformar <span className="text-metallic-pink">informação</span> em
              prevenção é um gesto de cuidado com a vida.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-3 sm:mt-5 text-xs sm:text-base lg:text-lg text-zinc-600 leading-relaxed max-w-[60ch]"
            >
              O <strong className="font-semibold text-zinc-900">Outubro Rosa</strong>{' '}
              lembra a importância de olhar com carinho para a própria saúde o ano
              inteiro — unindo{' '}
              <span className="text-pink-700 font-medium">escolhas saudáveis</span>,{' '}
              <span className="text-pink-700 font-medium">diagnóstico precoce</span> e{' '}
              <span className="text-pink-700 font-medium">acesso ao cuidado</span>{' '}
              na prevenção do câncer de mama.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-4 sm:mt-7 flex flex-row flex-wrap items-center gap-2.5 sm:gap-3.5 w-full"
            >
              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="#autoexame"
                className="btn-metallic-pink flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-2xl font-semibold text-xs sm:text-sm transition-all"
              >
                <HandHeart size={18} weight="duotone" className="shrink-0" />
                <span>5 Passos do Autoexame</span>
                <ArrowDownRight size={15} weight="bold" className="shrink-0" />
              </motion.a>

              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="#mitos"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-white/90 hover:bg-pink-50 text-zinc-800 border border-pink-200/80 font-semibold text-xs sm:text-sm transition-colors shadow-2xs"
              >
                <Question size={17} weight="duotone" className="text-pink-600 shrink-0" />
                <span>Mito ou Verdade</span>
              </motion.a>
            </motion.div>

            {/* Métricas de Prevenção do Câncer de Mama em 3 colunas */}
            <motion.div
              variants={itemVariants}
              className="mt-5 sm:mt-9 w-full grid grid-cols-3 gap-2 sm:gap-4"
            >
              <div className="p-2.5 sm:p-4 rounded-2xl bg-white/85 border border-pink-200/70 shadow-2xs">
                <div className="flex items-center gap-1 text-pink-600 font-mono-num text-xs sm:text-lg font-bold tracking-tight">
                  <CalendarCheck size={16} weight="duotone" className="shrink-0 hidden sm:inline" />
                  <span>40–49 anos</span>
                </div>
                <p className="mt-1 text-[10px] sm:text-xs text-zinc-600 leading-tight sm:leading-snug">
                  Mamografia preventiva por decisão conjunta.
                </p>
              </div>

              <div className="p-2.5 sm:p-4 rounded-2xl bg-white/85 border border-pink-200/70 shadow-2xs">
                <div className="flex items-center gap-1 text-pink-600 font-mono-num text-xs sm:text-lg font-bold tracking-tight">
                  <ShieldCheck size={16} weight="duotone" className="shrink-0 hidden sm:inline" />
                  <span>50–74 anos</span>
                </div>
                <p className="mt-1 text-[10px] sm:text-xs text-zinc-600 leading-tight sm:leading-snug">
                  Rastreamento mamográfico a cada <strong className="text-zinc-800">2 anos</strong>.
                </p>
              </div>

              <div className="p-2.5 sm:p-4 rounded-2xl bg-white/85 border border-pink-200/70 shadow-2xs">
                <div className="flex items-center gap-1 text-pink-600 font-mono-num text-xs sm:text-lg font-bold tracking-tight">
                  <Sparkle size={16} weight="duotone" className="shrink-0 hidden sm:inline" />
                  <span>Até 95%</span>
                </div>
                <p className="mt-1 text-[10px] sm:text-xs text-zinc-600 leading-tight sm:leading-snug">
                  Chances de cura com <strong className="text-zinc-800">diagnóstico precoce</strong>.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna Direita: Foto Real da Turma em Moldura Editorial Rosa Metálico */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 95, damping: 20, delay: 0.12 }}
            className="lg:col-span-5 relative"
          >
            <div className="ambient-float relative rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-pink-100/90 via-pink-50/75 to-white border border-pink-200/80 shadow-[0_22px_50px_-15px_rgba(194,50,120,0.16)] pt-3.5 sm:pt-5 px-3.5 sm:px-5 pb-0 overflow-hidden">
              <div className="relative z-10 flex items-center justify-between mb-2.5 sm:mb-3.5 px-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-pink-200/80 text-[11px] font-semibold text-pink-700 shadow-2xs">
                  <img
                    src="/images/campanha/laco-rosa.png"
                    alt=""
                    width={15}
                    height={15}
                    className="w-3.5 h-3.5 object-contain"
                  />
                  Juntas pela Prevenção
                </span>
                <span className="badge-metallic-pink font-mono-num text-[10px] sm:text-[11px] font-semibold px-3 py-0.5 rounded-full">
                  OUTUBRO ROSA
                </span>
              </div>

              {/* Imagem Candidata LCP — Foto Oficial da Turma (essa 1.jpeg recortada) */}
              <div className="relative z-10 overflow-hidden rounded-2xl sm:rounded-3xl border border-pink-200/70 bg-[#f6cadb]">
                <img
                  src="/images/campanha/turma-hero.jpg"
                  alt="Cinco mulheres sorrindo unidas em campanha pelo Outubro Rosa"
                  {...({ fetchpriority: 'high' } as React.ImgHTMLAttributes<HTMLImageElement>)}
                  decoding="sync"
                  width={1231}
                  height={698}
                  className="w-full h-auto object-cover select-none block"
                />
              </div>

              <div className="panel-metallic-pink relative z-20 -mx-3.5 sm:-mx-5 mt-3 sm:mt-4 px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between gap-3">
                <p className="text-[11px] sm:text-xs font-medium text-white leading-snug">
                  <strong className="text-pink-100 font-semibold">Amor próprio:</strong>{' '}
                  incentive quem você ama a realizar os exames preventivos.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Faixa Cinética Suave (Marquee) integrando o Hero à próxima seção */}
        <div className="mt-8 sm:mt-12 overflow-hidden rounded-2xl bg-white/70 border border-pink-200/60 py-2.5 backdrop-blur-xs">
          <div className="marquee-track items-center gap-6 text-xs font-semibold text-pink-700">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((text, idx) => (
              <span key={idx} className="inline-flex items-center gap-2.5 whitespace-nowrap px-1">
                <HeartStraight size={13} weight="fill" className="text-pink-500" />
                <span>{text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
