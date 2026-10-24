import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PersonSimpleRun,
  Carrot,
  Scales,
  ProhibitInset,
  Baby,
  Stethoscope,
  ShieldPlus,
  Microscope,
  CaretDown,
  Info,
} from '@phosphor-icons/react';

interface HealthyHabit {
  id: string;
  title: string;
  shortDesc: string;
  impactDetail: string;
  metric: string;
  icon: React.ElementType;
}

const HEALTHY_HABITS: HealthyHabit[] = [
  {
    id: 'atividade-fisica',
    title: 'Prática regular de atividades físicas',
    shortDesc: 'Movimentar o corpo equilibra hormônios e reduz processos inflamatórios.',
    impactDetail:
      'Caminhar, dançar, pedalar ou praticar exercícios ao menos 150 minutos por semana ajuda a regular os níveis de estrogênio e insulina, atuando diretamente na redução do risco de desenvolver câncer de mama.',
    metric: '150 min/sem recomendados',
    icon: PersonSimpleRun,
  },
  {
    id: 'alimentacao',
    title: 'Alimentação equilibrada e natural',
    shortDesc: 'Priorizar frutas, verduras, legumes e grãos integrais no cotidiano.',
    impactDetail:
      'Uma dieta rica em fibras, compostos antioxidantes e fitoquímicos protege as células contra danos oxidativos e auxilia na manutenção da saúde metabólica ao longo da vida.',
    metric: 'Base in natura & fibras',
    icon: Carrot,
  },
  {
    id: 'peso-corporal',
    title: 'Cuidado com o peso corporal',
    shortDesc: 'Manter o peso saudável, especialmente após a menopausa, reduz riscos.',
    impactDetail:
      'O tecido adiposo em excesso produz maiores quantidades de estrogênio após a menopausa. O acompanhamento nutricional e a rotina ativa são aliados fundamentais na proteção mamária.',
    metric: 'Equilíbrio metabólico',
    icon: Scales,
  },
  {
    id: 'evitar-alcool',
    title: 'Evitar o consumo excessivo de álcool',
    shortDesc: 'O álcool é um fator modificável diretamente ligado ao câncer de mama.',
    impactDetail:
      'De acordo com o INCA e a OMS, o consumo de bebidas alcoólicas eleva os níveis de hormônios sexuais e pode causar danos ao DNA celular. Reduzir ou evitar o consumo protege diretamente as mamas.',
    metric: 'Redução de risco direto',
    icon: ProhibitInset,
  },
  {
    id: 'amamentacao',
    title: 'Incentivo à amamentação',
    shortDesc: 'Sempre que possível, amamentar protege a saúde da mãe e do bebê.',
    impactDetail:
      'Durante o período de lactação, as células mamárias passam por renovação e maturação, além de ocorrer redução nas taxas de determinados hormônios ligados ao desenvolvimento tumoral.',
    metric: 'Fator protetor materno',
    icon: Baby,
  },
];

export const PreventionBentoSection: React.FC = () => {
  const [selectedHabitId, setSelectedHabitId] = useState<string>(HEALTHY_HABITS[0].id);

  const handleToggleHabit = (id: string) => {
    setSelectedHabitId((prev) => (prev === id ? id : id));
  };

  return (
    <section
      id="prevencao"
      className="py-10 sm:py-16 lg:py-22 relative bg-gradient-to-b from-[#fdf8f9] via-rose-50/55 to-[#fdf8f9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Editorial Compacto e Fluido */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="max-w-3xl mb-7 sm:mb-11"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100/90 text-rose-800 text-[11px] font-semibold tracking-wide uppercase">
            Prevenção Primária & Rastreamento no SUS
          </span>
          <h2 className="mt-2.5 sm:mt-3 font-display text-2xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-zinc-900 leading-tight">
            A prevenção começa com escolhas diárias e acesso informado aos exames.
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-zinc-600 leading-relaxed">
            Atitudes cotidianas reduzem o risco de desenvolver a doença, enquanto os
            exames garantidos pelo SUS permitem identificar alterações antes dos sintomas.
          </p>
        </motion.div>

        {/* Bento Grid 2.0 — Linha 1: 7 colunas (Hábitos com Expansão In-Place) + 5 colunas (Mamografia SUS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-stretch">
          {/* Card 1: Hábitos Protetores com Expansão Inline Imediata (Visível no Campo de Visão) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="lg:col-span-7 rounded-[2rem] sm:rounded-[2.5rem] bg-white/95 border border-rose-200/70 shadow-[0_18px_38px_-15px_rgba(136,19,55,0.06)] p-4 sm:p-8 flex flex-col justify-between"
          >
            <div className="mb-3.5 sm:mb-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-700">
                  Fatores Modificáveis (INCA)
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-800 text-[10px] sm:text-[11px] font-semibold border border-rose-200/60 shrink-0">
                  Toque para expandir
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-2xl font-bold text-zinc-900 mt-1">
                5 Escolhas Saudáveis no Dia a Dia
              </h3>
            </div>

            {/* Acordeão Interativo In-Place: a explicação abre DENTRO do próprio item clicado */}
            <div className="space-y-2.5">
              {HEALTHY_HABITS.map((habit) => {
                const IconComponent = habit.icon;
                const isSelected = habit.id === selectedHabitId;

                return (
                  <motion.div
                    layout
                    key={habit.id}
                    className={`rounded-2xl border transition-colors overflow-hidden ${
                      isSelected
                        ? 'bg-rose-50/75 border-rose-300 shadow-2xs'
                        : 'bg-zinc-50/70 hover:bg-rose-50/40 border-zinc-200/80'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => handleToggleHabit(habit.id)}
                      aria-expanded={isSelected}
                      className="w-full text-left p-3 sm:p-4 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-rose-700 text-white shadow-xs'
                              : 'bg-white text-rose-700 border border-rose-200/70'
                          }`}
                        >
                          <IconComponent size={20} weight="duotone" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-display font-bold text-xs sm:text-sm text-zinc-900 leading-snug">
                            {habit.title}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-zinc-600 mt-0.5 line-clamp-1 sm:line-clamp-none">
                            {habit.shortDesc}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="hidden sm:inline-block font-mono-num text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white text-rose-800 border border-rose-200/70">
                          {habit.metric}
                        </span>
                        <motion.span
                          animate={{ rotate: isSelected ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className={`w-7 h-7 rounded-full flex items-center justify-center ${
                            isSelected
                              ? 'bg-rose-700 text-white'
                              : 'bg-white text-zinc-600 border border-zinc-200'
                          }`}
                        >
                          <CaretDown size={14} weight="bold" />
                        </motion.span>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 140, damping: 22 }}
                          className="overflow-hidden"
                        >
                          <div className="px-3 pb-3 sm:px-4 sm:pb-4 pt-1">
                            <div className="rounded-xl bg-gradient-to-r from-rose-900 to-rose-800 text-white p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                              <div className="space-y-1">
                                <div className="flex items-center justify-between sm:justify-start gap-2 text-rose-200 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
                                  <span className="inline-flex items-center gap-1.5">
                                    <Info size={14} weight="fill" />
                                    Por que este hábito protege?
                                  </span>
                                  <span className="sm:hidden font-mono-num text-[10px] px-2 py-0.5 rounded-md bg-white/15 text-white">
                                    {habit.metric}
                                  </span>
                                </div>
                                <p className="text-xs text-rose-50 leading-relaxed">
                                  {habit.impactDetail}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Card 2: Mamografia no SUS + Imagem Pública de Autocuidado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.08 }}
            className="lg:col-span-5 rounded-[2rem] sm:rounded-[2.5rem] bg-white/95 border border-rose-200/70 shadow-[0_18px_38px_-15px_rgba(136,19,55,0.06)] p-4 sm:p-8 flex flex-col justify-between overflow-hidden relative"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-[11px] font-semibold">
                <Stethoscope size={15} weight="duotone" />
                <span>Diretrizes do SUS</span>
              </div>

              <h3 className="font-display text-lg sm:text-2xl font-bold text-zinc-900 mt-2.5 leading-snug">
                Mamografia: cuidado essencial para a saúde das mulheres
              </h3>

              <div className="mt-4 space-y-3">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-rose-50/80 border border-rose-200/70">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono-num text-xs sm:text-sm font-bold text-rose-800">
                      40 a 49 anos
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white text-rose-700 border border-rose-200">
                      Acesso Garantido no SUS
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-zinc-700 leading-relaxed">
                    Acesso garantido pelo SUS mesmo sem sintomas, mediante
                    decisão conjunta entre a mulher e o profissional de saúde.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono-num text-xs sm:text-sm font-bold text-rose-800">
                      50 a 74 anos
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-rose-700 text-white">
                      A cada 2 anos
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-zinc-700 leading-relaxed">
                    Faixa etária ampliada para rastreamento mamográfico preventivo
                    até os <strong>74 anos</strong>, com exame a cada dois anos.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-rose-100 flex items-center justify-between gap-3">
              <div className="max-w-[58%]">
                <p className="text-[11px] font-semibold text-rose-800 uppercase tracking-wide">
                  Atenção aos sintomas
                </p>
                <p className="text-[11px] sm:text-xs text-zinc-600 mt-0.5 leading-snug">
                  Qualquer sinal suspeito deve ser avaliado imediatamente, em qualquer idade.
                </p>
              </div>
              <img
                src="/images/campanha/mulheres-toque.png"
                alt="Três mulheres diversas com a mão sobre o peito em gesto de autocuidado"
                loading="lazy"
                decoding="async"
                width={220}
                height={220}
                className="w-28 sm:w-36 h-auto object-contain select-none -mb-4"
              />
            </div>
          </motion.div>
        </div>

        {/* Bento Grid 2.0 — Linha 2: Prevenção do Câncer do Colo do Útero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
          className="mt-5 sm:mt-7 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-rose-950 via-rose-900 to-rose-800 text-white p-5 sm:p-8 lg:p-10 shadow-[0_22px_44px_-15px_rgba(136,19,55,0.22)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-rose-100 text-[11px] font-semibold tracking-wide">
                Cuidado Integral Feminino
              </span>
              <h3 className="mt-2.5 font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-snug">
                Prevenção do Câncer do Colo do Útero: Vacina e Papanicolau
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-rose-100/90 leading-relaxed">
                Forte ligação com a infecção persistente pelo HPV. A proteção une
                vacinação na juventude e rastreamento periódico na vida adulta.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-5">
              <div className="rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 p-3.5 sm:p-5">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-rose-500/30 border border-rose-300/30 flex items-center justify-center text-rose-100 mb-2.5 sm:mb-3">
                  <ShieldPlus size={20} weight="duotone" />
                </div>
                <span className="font-mono-num text-[10px] sm:text-xs font-semibold text-rose-200 uppercase block">
                  9 a 14 anos
                </span>
                <h4 className="font-display text-sm sm:text-lg font-bold text-white mt-0.5">
                  Vacina contra HPV
                </h4>
                <p className="mt-1 text-[11px] sm:text-xs text-rose-100/90 leading-snug sm:leading-relaxed">
                  Gratuita no SUS para <strong className="text-white">meninas e meninos de 9 a 14 anos</strong> e grupos especiais.
                </p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 p-3.5 sm:p-5">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-rose-500/30 border border-rose-300/30 flex items-center justify-center text-rose-100 mb-2.5 sm:mb-3">
                  <Microscope size={20} weight="duotone" />
                </div>
                <span className="font-mono-num text-[10px] sm:text-xs font-semibold text-rose-200 uppercase block">
                  25 a 64 anos
                </span>
                <h4 className="font-display text-sm sm:text-lg font-bold text-white mt-0.5">
                  Exame Papanicolau
                </h4>
                <p className="mt-1 text-[11px] sm:text-xs text-rose-100/90 leading-snug sm:leading-relaxed">
                  Recomendado a cada <strong className="text-white">3 anos</strong> para detectar alterações antes que evoluam.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PreventionBentoSection;
