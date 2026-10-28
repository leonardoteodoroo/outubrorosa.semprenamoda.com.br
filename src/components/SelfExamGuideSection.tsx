import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SELF_EXAM_STEPS,
  WARNING_SIGNS,
} from '../data/campaignData';
import {
  HandHeart,
  WarningCircle,
  MagnifyingGlassPlus,
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
} from '@phosphor-icons/react';

export const SelfExamGuideSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  const currentStep = SELF_EXAM_STEPS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SELF_EXAM_STEPS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? SELF_EXAM_STEPS.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="autoexame"
      className="py-10 sm:py-16 lg:py-22 bg-gradient-to-b from-[#fdf8f9] via-pink-100/40 to-[#fdf8f9] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho com botão de miniatura para abrir o Infográfico Ilustrado */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10"
        >
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-[11px] font-semibold tracking-wide uppercase">
              <HandHeart size={14} weight="duotone" />
              Autoconhecimento Corporal
            </span>
            <h2 className="mt-2.5 sm:mt-3 font-display text-2xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-zinc-900 leading-tight">
              Como realizar o autoexame das mamas passo a passo.
            </h2>
            <p className="mt-2 text-xs sm:text-base text-zinc-600 leading-relaxed">
              Prática mensal de <strong className="text-zinc-900">autoconhecimento</strong>{' '}
              (idealmente alguns dias após o período menstrual) que ajuda a notar alterações
              precoces — complementando os exames clínicos e a mamografia.
            </p>
          </div>

          <motion.button
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => setIsPosterModalOpen(true)}
            className="self-start lg:self-auto inline-flex items-center gap-3 p-2 pr-4 rounded-2xl bg-white hover:bg-pink-50 text-pink-900 border border-pink-200/90 font-semibold text-xs sm:text-sm shadow-xs transition-colors shrink-0"
          >
            <img
              src="/images/campanha/autoexame-guia.jpg"
              alt=""
              width={44}
              height={44}
              className="w-10 h-10 rounded-xl object-cover border border-pink-200"
            />
            <div className="text-left">
              <span className="block font-display font-bold text-xs sm:text-sm text-zinc-900 leading-none">
                Ampliar Infográfico Ilustrado
              </span>
              <span className="text-[10px] text-pink-600 font-medium flex items-center gap-1 mt-1">
                <MagnifyingGlassPlus size={13} weight="bold" />
                Toque para ver as 6 ilustrações
              </span>
            </div>
          </motion.button>
        </motion.div>

        {/* Grid Otimizado: Stepper Compacto que cabe 100% na tela mobile (7 cols) + Sinais de Alerta (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-stretch">
          {/* Coluna Esquerda: Navegador dos 5 Passos Calibrado para Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="lg:col-span-7 rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-pink-200/80 shadow-[0_18px_38px_-15px_rgba(194,50,120,0.07)] p-4 sm:p-8 flex flex-col justify-between"
          >
            {/* Barra de 5 Passos em UMA ÚNICA LINHA (grid-cols-5) com Pílula Deslizante Rosa Metálico */}
            <div className="grid grid-cols-5 gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-pink-50/90 border border-pink-200/60">
              {SELF_EXAM_STEPS.map((step, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={step.stepNumber}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`relative py-2 sm:py-2.5 px-1 rounded-xl font-mono-num text-xs font-bold transition-colors flex items-center justify-center ${
                      isActive
                        ? 'text-white'
                        : 'text-pink-900 hover:text-pink-600'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeSelfExamTab"
                        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                        className="badge-metallic-pink absolute inset-0 rounded-xl shadow-xs"
                      />
                    )}
                    <span className="relative z-10">
                      <span className="hidden sm:inline">PASSO </span>
                      {step.stepNumber}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Conteúdo do Passo Ativo Compacto e Dinâmico */}
            <div className="py-4 sm:py-6 flex-1 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.stepNumber}
                  initial={{ opacity: 0, x: 14, filter: 'blur(3px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -14, filter: 'blur(3px)' }}
                  transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono-num text-[11px] sm:text-xs font-bold text-pink-600">
                      ETAPA {currentStep.stepNumber} DE 05
                    </span>
                    <span className="h-1 w-1 rounded-full bg-pink-400" />
                    <span className="font-sans font-semibold text-[11px] sm:text-xs text-pink-700 bg-pink-100/90 px-2.5 py-0.5 rounded-full">
                      {currentStep.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-2 sm:mt-3 font-display text-lg sm:text-2xl lg:text-3xl font-bold text-zinc-900 leading-snug">
                    {currentStep.title}
                  </h3>

                  <p className="mt-2 sm:mt-3 text-xs sm:text-base text-zinc-700 leading-relaxed">
                    {currentStep.description}
                  </p>

                  <div className="mt-3.5 sm:mt-5 p-3 sm:p-4 rounded-2xl bg-pink-50/90 border border-pink-200/70 flex items-start gap-2.5">
                    <CheckCircle
                      size={18}
                      weight="fill"
                      className="text-pink-600 shrink-0 mt-0.5"
                    />
                    <p className="text-[11px] sm:text-sm text-zinc-800 font-medium leading-snug sm:leading-relaxed">
                      {currentStep.tip}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controles Anterior / Próximo sempre visíveis na mesma dobra em 1 linha */}
              <div className="mt-4 sm:mt-6 pt-3.5 sm:pt-5 border-t border-pink-100 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold transition-colors active:scale-95 whitespace-nowrap shrink-0"
                >
                  <ArrowLeft size={14} weight="bold" />
                  <span>Anterior</span>
                </button>

                <div className="flex items-center gap-1 sm:gap-1.5">
                  {SELF_EXAM_STEPS.map((s, i) => (
                    <button
                      key={s.stepNumber}
                      type="button"
                      aria-label={`Ir para passo ${s.stepNumber}`}
                      onClick={() => setActiveIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === activeIndex ? 'w-5 sm:w-6 badge-metallic-pink' : 'w-2 bg-pink-200'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-metallic-pink inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-semibold transition-all active:scale-95 whitespace-nowrap shrink-0"
                >
                  <span>Próximo passo</span>
                  <ArrowRight size={14} weight="bold" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Coluna Direita: Painel dos 5 Sinais de Alerta Integrado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.08 }}
            className="lg:col-span-5 rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-pink-200/80 p-4 sm:p-8 shadow-[0_18px_38px_-15px_rgba(194,50,120,0.07)] flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-[11px] font-semibold">
                <WarningCircle size={15} weight="fill" className="text-pink-600" />
                <span>Atenção aos Sinais de Alerta</span>
              </div>
              <h3 className="mt-2.5 font-display text-lg sm:text-2xl font-bold text-zinc-900 leading-snug">
                O que observar durante o autoconhecimento?
              </h3>
              <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                Alterações persistentes exigem avaliação médica presencial:
              </p>

              <div className="mt-3.5 space-y-2">
                {WARNING_SIGNS.map((sign, index) => (
                  <div
                    key={index}
                    className="p-2.5 sm:p-3 rounded-xl bg-pink-50/75 border border-pink-200/60 flex items-start gap-2.5"
                  >
                    <span className="badge-metallic-pink font-mono-num text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0 mt-0.5">
                      0{index + 1}
                    </span>
                    <p className="text-xs text-zinc-800 font-medium leading-snug">
                      {sign}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal de Ampliação do Infográfico com AnimatePresence */}
      <AnimatePresence>
        {isPosterModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPosterModalOpen(false)}
            className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-md p-4 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-3xl bg-white p-4 sm:p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-display font-bold text-base sm:text-lg text-zinc-900">
                  Guia Ilustrado — Faça o Autoexame
                </h4>
                <button
                  type="button"
                  onClick={() => setIsPosterModalOpen(false)}
                  aria-label="Fechar visualização"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 flex items-center justify-center transition-colors"
                >
                  <X size={18} weight="bold" />
                </button>
              </div>
              <img
                src="/images/campanha/autoexame-guia.jpg"
                alt="Infográfico completo do autoexame das mamas"
                className="w-full h-auto rounded-2xl border border-pink-100"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SelfExamGuideSection;
