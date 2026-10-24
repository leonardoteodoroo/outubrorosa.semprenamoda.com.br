import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SPECIALISTS,
  STUDENT_PARTICIPANTS,
} from '../data/campaignData';
import {
  UsersThree,
  Sparkle,
  HeartStraight,
} from '@phosphor-icons/react';

const GROUP_FILTERS = [
  'Todas',
  'Estratégia',
  'Criação',
  'Comunicação',
  'Orientação',
];

export const ParticipantsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Todas');

  const filteredStudents =
    selectedFilter === 'Todas'
      ? STUDENT_PARTICIPANTS
      : STUDENT_PARTICIPANTS.filter((p) => p.group === selectedFilter);

  return (
    <div>
      {/* PARTE A: VOZES & ESPECIALISTAS CONVIDADOS (Foto + Nome + 1 Cargo) */}
      <section
        id="especialistas"
        className="py-10 sm:py-16 lg:py-22 bg-gradient-to-b from-[#fdf8f9] via-white to-rose-50/45"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="max-w-3xl mb-6 sm:mb-10"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-[11px] font-semibold tracking-wide uppercase">
              <Sparkle size={14} weight="duotone" />
              Referências em Saúde, Educação e Cuidado
            </span>
            <h2 className="mt-2.5 sm:mt-3 font-display text-2xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-zinc-900 leading-tight">
              Mulheres e Especialistas que inspiram nossa campanha.
            </h2>
            <p className="mt-2 text-xs sm:text-base text-zinc-600 leading-relaxed">
              Profissionais dedicadas à saúde pública, ao ensino, ao serviço social
              e ao cuidado compassivo com a vida.
            </p>
          </motion.div>

          {/* Grade Compacta no Mobile (2 colunas + 1) e 3 Colunas no Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-7">
            {SPECIALISTS.map((person, index) => (
              <motion.article
                key={person.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  type: 'spring',
                  stiffness: 110,
                  damping: 20,
                  delay: index * 0.06,
                }}
                className={`group flex flex-col ${
                  index === 2 ? 'col-span-2 sm:col-span-1 max-w-[240px] sm:max-w-none mx-auto w-full' : ''
                }`}
              >
                <div className="relative aspect-[3/4] w-full rounded-3xl sm:rounded-[2.25rem] overflow-hidden bg-rose-100 border border-rose-200/80 shadow-[0_16px_32px_-12px_rgba(136,19,55,0.12)]">
                  <img
                    src={person.image}
                    alt={person.name}
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-950/65 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/95 backdrop-blur-xs text-rose-800 text-[10px] sm:text-[11px] font-semibold shadow-2xs">
                      <img
                        src="/images/campanha/laco-rosa.png"
                        alt=""
                        width={12}
                        height={12}
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 object-contain"
                      />
                      Especialista
                    </span>
                  </div>
                </div>

                {/* Nome + 1 Cargo */}
                <div className="mt-2.5 sm:mt-4 px-0.5">
                  <h3 className="font-display text-sm sm:text-xl font-bold text-zinc-900 group-hover:text-rose-700 transition-colors leading-snug">
                    {person.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] sm:text-sm font-medium text-rose-800 leading-snug">
                    {person.role}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTE B: ALUNAS & EDUCADORAS EM CAMPANHA (Grade 2x2 no Mobile, texto definitivo) */}
      <section
        id="campanha"
        className="py-10 sm:py-16 lg:py-22 bg-gradient-to-b from-rose-50/45 via-[#fdf8f9] to-[#fdf8f9]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10"
          >
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-[11px] font-semibold tracking-wide uppercase">
                <UsersThree size={15} weight="duotone" />
                Protagonismo Estudantil & Docente
              </span>
              <h2 className="mt-2.5 sm:mt-3 font-display text-2xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-zinc-900 leading-tight">
                Alunas e Educadoras da Campanha Outubro Rosa.
              </h2>
              <p className="mt-2 text-xs sm:text-base text-zinc-600 leading-relaxed">
                Estudantes e educadoras unidas pela conscientização, levando
                acolhimento, informação segura e incentivo ao diagnóstico precoce
                para toda a comunidade.
              </p>
            </div>

            {/* Filtro em 1 única linha com Pílula Deslizante Animada (layoutId) */}
            <div className="grid grid-cols-5 sm:flex items-center gap-1 bg-white/90 p-1 rounded-2xl border border-rose-200/70 w-full sm:w-auto">
              {GROUP_FILTERS.map((filter) => {
                const active = selectedFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setSelectedFilter(filter)}
                    className={`relative px-1.5 sm:px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-semibold transition-colors text-center truncate ${
                      active
                        ? 'text-white'
                        : 'text-zinc-700 hover:text-rose-700'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="activeParticipantFilter"
                        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                        className="absolute inset-0 rounded-xl bg-rose-700 shadow-2xs"
                      />
                    )}
                    <span className="relative z-10">{filter}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Grade 2x2 Compacta no Mobile (grid-cols-2) e 3 Colunas no Desktop */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredStudents.map((participant) => {
                const hasRealPhoto = Boolean(participant.image);
                const initials = participant.name
                  .split(' ')
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')
                  .toUpperCase();

                return (
                  <motion.article
                    layout
                    key={participant.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                    className="flex flex-col group"
                  >
                    {/* Moldura Compacta no Mobile (para caber 2x2 na dobra) e 3:4 no Desktop */}
                    <div className="relative aspect-[4/4.2] sm:aspect-[3/4] w-full rounded-2xl sm:rounded-[2rem] overflow-hidden border border-rose-200/80 bg-white shadow-[0_14px_28px_-14px_rgba(136,19,55,0.08)]">
                      {hasRealPhoto ? (
                        <>
                          <img
                            src={participant.image}
                            alt={`${participant.name} — ${participant.role}`}
                            decoding="async"
                            className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-rose-950/60 via-transparent to-transparent" />
                          <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5">
                            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/90 backdrop-blur-xs text-rose-800 font-mono-num text-[9px] sm:text-[11px] font-bold">
                              {participant.group}
                            </span>
                          </div>
                        </>
                      ) : (
                        /* Card Editorial da Participante (pronto para campanha, sem jargão técnico) */
                        <div className="w-full h-full bg-gradient-to-br from-rose-100/75 via-rose-50/40 to-white p-3.5 sm:p-6 flex flex-col justify-between relative group-hover:from-rose-100 transition-colors">
                          <div className="flex items-center justify-between">
                            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/90 text-rose-800 font-mono-num text-[9px] sm:text-[11px] font-bold border border-rose-200/60">
                              {participant.group}
                            </span>
                            <img
                              src="/images/campanha/laco-rosa.png"
                              alt=""
                              width={16}
                              height={16}
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain"
                            />
                          </div>

                          <div className="my-auto flex flex-col items-center text-center px-1">
                            <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-rose-600 to-rose-800 text-white font-display font-bold text-sm sm:text-xl flex items-center justify-center shadow-sm mb-2 sm:mb-3 group-hover:scale-105 transition-transform">
                              {initials}
                            </div>
                            <p className="text-[10px] sm:text-xs text-zinc-600 leading-snug line-clamp-3">
                              {participant.placeholderDescription}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-rose-200/50 flex items-center justify-center gap-1 text-[9px] sm:text-[11px] text-rose-700 font-semibold">
                            <HeartStraight size={11} weight="fill" className="text-rose-500" />
                            <span>Embaixadora Outubro Rosa</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Nome + 1 Cargo */}
                    <div className="mt-2 sm:mt-3.5 px-0.5">
                      <h3 className="font-display text-sm sm:text-lg font-bold text-zinc-900 leading-tight">
                        {participant.name}
                      </h3>
                      <p className="mt-0.5 text-[11px] sm:text-xs font-medium text-rose-800 leading-tight">
                        {participant.role}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ParticipantsSection;
