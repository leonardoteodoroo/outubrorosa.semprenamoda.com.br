import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PersonSimpleRun,
  Carrot,
  Scales,
  ProhibitInset,
  Baby,
  Stethoscope,
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
      'O consumo de bebidas alcoólicas eleva os níveis de hormônios sexuais e pode causar danos ao DNA celular. Reduzir ou evitar o consumo protege diretamente a saúde das mamas.',
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
      className="py-10 sm:py-16 lg:py-22 relative bg-gradient-to-b from-[#fdf8f9] via-pink-50/55 to-[#fdf8f9]"
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
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100/90 text-pink-700 text-[11px] font-semibold tracking-wide uppercase">
            Prevenção Primária & Diagnóstico Precoce
          </span>
          <h2 className="mt-2.5 sm:mt-3 font-display text-2xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-zinc-900 leading-tight">
            A prevenção começa com escolhas diárias e acesso informado à mamografia.
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-zinc-600 leading-relaxed">
            Atitudes cotidianas reduzem o risco de desenvolver o câncer de mama,
            enquanto os exames de rastreamento permitem identificar alterações antes dos sintomas.
          </p>
        </motion.div>

        {/* Bento Grid — 7 colunas (Hábitos com Expansão In-Place) + 5 colunas (Mamografia + Aluna) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-stretch">
          {/* Card 1: Hábitos Protetores com Expansão Inline Imediata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="lg:col-span-7 rounded-[2rem] sm:rounded-[2.5rem] bg-white/95 border border-pink-200/70 shadow-[0_18px_38px_-15px_rgba(194,50,120,0.07)] p-4 sm:p-8 flex flex-col justify-between"
          >
            <div className="mb-3.5 sm:mb-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-pink-600">
                  Fatores de Proteção Modificáveis
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 text-[10px] sm:text-[11px] font-semibold border border-pink-200/70 shrink-0">
                  Toque para expandir
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-2xl font-bold text-zinc-900 mt-1">
                5 Escolhas Saudáveis no Dia a Dia
              </h3>
            </div>

            {/* Acordeão Interativo In-Place */}
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
                        ? 'bg-pink-50/75 border-pink-300 shadow-2xs'
                        : 'bg-zinc-50/70 hover:bg-pink-50/40 border-zinc-200/80'
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
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                            isSelected
                              ? 'badge-metallic-pink shadow-xs'
                              : 'bg-white text-pink-600 border border-pink-200/80'
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
                        <span className="hidden sm:inline-block font-mono-num text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white text-pink-700 border border-pink-200/80">
                          {habit.metric}
                        </span>
                        <motion.span
                          animate={{ rotate: isSelected ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className={`w-7 h-7 rounded-full flex items-center justify-center ${
                            isSelected
                              ? 'badge-metallic-pink'
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
                            <div className="panel-metallic-pink rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                              <div className="space-y-1">
                                <div className="flex items-center justify-between sm:justify-start gap-2 text-pink-100 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
                                  <span className="inline-flex items-center gap-1.5">
                                    <Info size={14} weight="fill" />
                                    Por que este hábito protege?
                                  </span>
                                  <span className="sm:hidden font-mono-num text-[10px] px-2 py-0.5 rounded-md bg-white/20 text-white">
                                    {habit.metric}
                                  </span>
                                </div>
                                <p className="text-xs text-white leading-relaxed">
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

          {/* Card 2: Mamografia + Foto da Aluna com as mãos no peito (essa 2.jpeg recortada) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.08 }}
            className="lg:col-span-5 rounded-[2rem] sm:rounded-[2.5rem] bg-white/95 border border-pink-200/70 shadow-[0_18px_38px_-15px_rgba(194,50,120,0.07)] p-4 sm:p-8 flex flex-col justify-between overflow-hidden relative"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-[11px] font-semibold">
                <Stethoscope size={15} weight="duotone" />
                <span>Rastreamento Mamográfico</span>
              </div>

              <h3 className="font-display text-lg sm:text-2xl font-bold text-zinc-900 mt-2.5 leading-snug">
                Mamografia: cuidado essencial para a saúde das mulheres
              </h3>

              <div className="mt-4 space-y-3">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-pink-50/80 border border-pink-200/70">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono-num text-xs sm:text-sm font-bold text-pink-700">
                      40 a 49 anos
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white text-pink-700 border border-pink-200">
                      Acesso Garantido
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-zinc-700 leading-relaxed">
                    Realização preventiva mesmo sem sintomas, mediante decisão
                    conjunta entre a mulher e o profissional de saúde.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono-num text-xs sm:text-sm font-bold text-pink-700">
                      50 a 74 anos
                    </span>
                    <span className="badge-metallic-pink text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                      A cada 2 anos
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-zinc-700 leading-relaxed">
                    Faixa etária recomendada para rastreamento mamográfico
                    preventivo até os <strong>74 anos</strong>, a cada dois anos.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-pink-100/80 via-pink-50/70 to-white border border-pink-200/80 p-3.5 sm:p-5 flex items-center justify-between gap-4 flex-1">
              <div className="flex-1 space-y-1.5">
                <span className="inline-block text-[10px] sm:text-[11px] font-bold text-pink-700 uppercase tracking-wider bg-white/90 px-2.5 py-0.5 rounded-full border border-pink-200/70">
                  Atenção aos sinais
                </span>
                <h4 className="font-display text-sm sm:text-base font-bold text-zinc-900 leading-snug">
                  O cuidado começa pelo olhar atento ao próprio corpo
                </h4>
                <p className="text-[11px] sm:text-xs text-zinc-600 leading-relaxed">
                  Qualquer sinal ou alteração persistente nas mamas deve ser avaliado por um profissional de saúde, em qualquer idade.
                </p>
              </div>
              <div className="w-28 sm:w-36 lg:w-40 aspect-[4/5] rounded-2xl overflow-hidden border-2 border-white bg-[#fbd5e5] shadow-[0_12px_24px_-8px_rgba(194,50,120,0.22)] shrink-0">
                <img
                  src="/images/campanha/aluna-autocuidado.jpg"
                  alt="Mulher sorrindo com as mãos sobre o peito em gesto de autocuidado"
                  loading="lazy"
                  decoding="async"
                  width={843}
                  height={1029}
                  className="w-full h-full object-cover object-top select-none"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PreventionBentoSection;
