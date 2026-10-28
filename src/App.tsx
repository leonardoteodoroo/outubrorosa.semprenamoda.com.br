import React, { Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';

// Lazy Loading Universal das seções abaixo da dobra (Diretriz react-vite-pagespeed-100)
const PreventionBentoSection = React.lazy(
  () => import('./components/PreventionBentoSection')
);
const SelfExamGuideSection = React.lazy(
  () => import('./components/SelfExamGuideSection')
);
const MythsTruthsSection = React.lazy(
  () => import('./components/MythsTruthsSection')
);
const Footer = React.lazy(() => import('./components/Footer'));

const SectionSkeleton: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="h-64 rounded-[2.5rem] bg-pink-100/50 animate-pulse border border-pink-200/50" />
  </div>
);

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Camada de textura editorial fixa (pointer-events-none para zero impacto em scroll/GPU) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none editorial-grain"
      />

      <Navbar />

      <main className="flex-1 relative z-10">
        {/* Caminho Crítico Imediato (Acima da Dobra) */}
        <HeroSection />

        {/* Seções Abaixo da Dobra Carregadas Sob Demanda */}
        <Suspense fallback={<SectionSkeleton />}>
          <PreventionBentoSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <SelfExamGuideSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <MythsTruthsSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
