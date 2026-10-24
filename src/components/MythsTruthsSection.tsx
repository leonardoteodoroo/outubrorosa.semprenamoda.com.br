import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MYTHS_AND_TRUTHS } from '../data/campaignData';
import {
  Question,
  CheckCircle,
  XCircle,
  Sparkle,
  ArrowsClockwise,
} from '@phosphor-icons/react';

export const MythsTruthsSection: React.FC = () => {
  const [revealedMap, setRevealedMap] = useState<Record<string, 'myth' | 'truth'>>({});

  const handleSelect = (id: string, choice: 'myth' | 'truth') => {
    setRevealedMap((prev) => ({
      ...prev,
      [id]: choice,
    }));
  };

  const handleRevealAll = () => {
    const all: Record<string, 'myth' | 'truth'> = {};
    MYTHS_AND_TRUTHS.forEach((item) => {
      all[item.id] = 'myth';
    });
    setRevealedMap(all);
  };

  const handleReset = () => {
    setRevealedMap({});
  };

  const revealedCount = Object.keys(revealedMap).length;

  return (
    <section
      id="mitos"
      className="py-10 sm:py-16 lg:py-22 relative bg-gradient-to-b from-[#fdf8f9] via-rose-50/45 to-[#fdf8f9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho com contador interativo */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10"
        >
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-[11px] font-semibold tracking-wide uppercase">
              <Question size={14} weight="duotone" />
              Informação Baseada em Evidências
            </span>
            <h2 className="mt-2.5 sm:mt-3 font-display text-2xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-zinc-900 leading-tight">
              Mito ou Verdade? Desvende as principais dúvidas.
            </h2>
            <p className="mt-2 text-xs sm:text-base text-zinc-600 leading-relaxed">
              Toque em <strong className="text-zinc-900">É Mito</strong> ou{' '}
              <strong className="text-zinc-900">É Verdade</strong> em cada
              afirmação para revelar o esclarecimento segundo o INCA e o Ministério da Saúde.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="px-3.5 py-2 rounded-2xl bg-rose-50 border border-rose-200/70 font-mono-num text-xs font-semibold text-rose-900">
              Explorados: {revealedCount} / {MYTHS_AND_TRUTHS.length}
            </div>

            {revealedCount < MYTHS_AND_TRUTHS.length ? (
              <button
                type="button"
                onClick={handleRevealAll}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-rose-700 hover:bg-rose-800 text-white text-xs font-semibold transition-all active:scale-95"
              >
                <Sparkle size={14} weight="fill" />
                <span>Revelar Respostas</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold transition-all active:scale-95"
              >
                <ArrowsClockwise size={14} weight="bold" />
                <span>Reiniciar</span>
              </button>
            )}
          </div>
        </motion.div>

        {/* Grid Compacto e Dinâmico de Cards Interativos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5">
          {MYTHS_AND_TRUTHS.map((item, idx) => {
            const userChoice = revealedMap[item.id];
            const isRevealed = Boolean(userChoice);
            const isCorrect =
              (userChoice === 'myth' && item.isMyth) ||
              (userChoice === 'truth' && !item.isMyth);

            return (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  type: 'spring',
                  stiffness: 110,
                  damping: 20,
                  delay: idx * 0.04,
                }}
                className={`rounded-3xl sm:rounded-[2rem] border p-4 sm:p-6 transition-colors flex flex-col justify-between ${
                  isRevealed
                    ? 'bg-white border-rose-300 shadow-[0_16px_32px_-14px_rgba(136,19,55,0.08)]'
                    : 'bg-white/90 hover:bg-white border-rose-200/70 shadow-2xs'
                } ${idx === MYTHS_AND_TRUTHS.length - 1 ? 'md:col-span-2' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="font-mono-num text-[10px] sm:text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200/60 px-2.5 py-0.5 rounded-full">
                      0{idx + 1} • {item.tag}
                    </span>

                    {isRevealed && (
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                          isCorrect
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : 'bg-rose-100 text-rose-800 border border-rose-200'
                        }`}
                      >
                        <CheckCircle size={13} weight="fill" />
                        {isCorrect ? 'Você acertou!' : 'Esclarecimento'}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-base sm:text-xl font-bold text-zinc-900 leading-snug">
                    {item.statement}
                  </h3>
                </div>

                <div className="mt-3.5 sm:mt-5">
                  <AnimatePresence mode="wait">
                    {!isRevealed ? (
                      <motion.div
                        key="buttons"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-2 gap-2.5"
                      >
                        <button
                          type="button"
                          onClick={() => handleSelect(item.id, 'myth')}
                          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-rose-50 hover:bg-rose-700 hover:text-white text-rose-900 border border-rose-200 font-semibold text-xs sm:text-sm transition-all active:scale-[0.98]"
                        >
                          <XCircle size={16} weight="duotone" />
                          <span>É Mito</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSelect(item.id, 'truth')}
                          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-50 hover:bg-zinc-900 hover:text-white text-zinc-800 border border-zinc-200 font-semibold text-xs sm:text-sm transition-all active:scale-[0.98]"
                        >
                          <CheckCircle size={16} weight="duotone" />
                          <span>É Verdade</span>
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="explanation"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
                        className="p-3.5 sm:p-4 rounded-2xl bg-rose-50/85 border border-rose-200/80"
                      >
                        <span className="font-display font-bold text-xs sm:text-sm text-rose-800 block mb-1">
                          {item.verdictLabel}
                        </span>
                        <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                          {item.explanation}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MythsTruthsSection;
