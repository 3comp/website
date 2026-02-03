"use client";

import SectionAbout from '@/components/about/SectionAbout';
import SectionCTA from '@/components/SectionCTA';


export default function AboutUsPage() {
  return (
    <>
      <div className="min-h-screen">
        <main className="mx-auto min-h-[80vh] w-full max-w-6xl px-4 py-8">
          <SectionAbout />
          <SectionCTA />
        </main>
      </div>
    </>
  );
}