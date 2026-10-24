import React from 'react';
import { motion } from 'framer-motion';
import { SPECIALISTS } from '../data/campaignData';
import { Sparkle } from '@phosphor-icons/react';

export const ParticipantsSection: React.FC = () => {
  return (
    <section
      id="especialistas"
      className="py-10 sm:py-16 lg:py-22 bg-gradient-to-b from-[#fdf8f9] via-white to-[#fdf8f9]"
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
                index === 2
                  ? 'col-span-2 sm:col-span-1 max-w-[240px] sm:max-w-none mx-auto w-full'
                  : ''
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
  );
};

export default ParticipantsSection;
