import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  List,
  X,
  ArrowUpRight,
  HeartStraight,
} from '@phosphor-icons/react';

const NAV_ITEMS = [
  { label: 'Prevenção & SUS', href: '#prevencao' },
  { label: 'Autoexame', href: '#autoexame' },
  { label: 'Mito ou Verdade', href: '#mitos' },
  { label: 'Especialistas', href: '#especialistas' },
  { label: 'Alunas', href: '#campanha' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-30 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-5">
      <div className="max-w-7xl mx-auto">
        <nav
          aria-label="Navegação principal"
          className="rounded-full px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between liquid-glass"
        >
          <a
            href="#topo"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
          >
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-rose-50 border border-rose-200/80 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
              <img
                src="/images/campanha/laco-rosa.png"
                alt=""
                width={22}
                height={22}
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
            </span>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm sm:text-base tracking-tight text-zinc-900 leading-none">
                Outubro <span className="text-rose-600">Rosa</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-zinc-500 tracking-wide mt-0.5">
                Campanha Educativa & Saúde da Mulher
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-zinc-700 hover:text-rose-700 hover:bg-rose-50/90 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="#autoexame"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-700 hover:bg-rose-800 active:scale-[0.98] text-white text-xs font-semibold tracking-wide transition-all shadow-xs"
            >
              <HeartStraight size={14} weight="fill" />
              <span>Guia de Autocuidado</span>
              <ArrowUpRight size={13} weight="bold" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden w-9 h-9 rounded-full bg-rose-50 text-rose-800 flex items-center justify-center border border-rose-200/70 active:scale-95 transition-transform"
          >
            {mobileMenuOpen ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
              className="md:hidden mt-2 rounded-3xl liquid-glass p-3 shadow-xl"
            >
              <div className="grid grid-cols-2 gap-1.5">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-2xl text-xs font-semibold text-zinc-800 bg-white/70 hover:bg-rose-50 hover:text-rose-700 transition-colors flex items-center justify-between border border-rose-100/80"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} className="text-rose-600 shrink-0" />
                  </a>
                ))}
              </div>
              <a
                href="#autoexame"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-2.5 rounded-2xl bg-rose-700 text-white text-center text-xs font-semibold flex items-center justify-center gap-2"
              >
                <HeartStraight size={14} weight="fill" />
                <span>Passo a Passo do Autoexame</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
