'use client';

import Header from '@/components/Header';
import SectionHero from '@/components/SectionHero';
import SectionServices from '@/components/SectionServices';
import SectionApproach from '@/components/SectionApproach';
import SectionTeam from '@/components/SectionTeam';
import SectionCTA from '@/components/SectionCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <SectionHero />
        <SectionServices />
        <SectionApproach />
        <SectionTeam />
        <SectionCTA />
      </main>
    </div>
  );
}
