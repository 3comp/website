"use client";

import SectionCTA from '@/components/SectionCTA';
import { useI18n } from '@/components/LanguageProvider';


export default function AboutUsPage() {
  const { t } = useI18n();
  return (
    <>
      <div className="min-h-screen">
        <main className="mx-auto min-h-[80vh] w-full max-w-6xl px-4 py-8">
          <section id="about-us" className="section">
            <div id="what-we-do" className="container-page">
              <div className="surface p-8 shadow-sm md:p-12">
                <div className="max-w-3xl">
                  <h2 className="section-title">
                    {t('about.whatWeDo.title1')}{' '}
                    <span className="text-blue-600">
                      {t('about.whatWeDo.title2')}
                    </span>
                  </h2>
                  <p className="section-subtitle">{t('about.whatWeDo.text')}</p>
                </div>
              </div>
            </div>

            <div id="how-we-think" className="container-page">
              <div className="p-8 md:p-12">
                <div className="max-w-3xl">
                  <h2 className="section-title">
                    {t('about.howWeThink.title1')}{' '}
                    <span className="text-blue-600">
                      {t('about.howWeThink.title2')}
                    </span>
                  </h2>
                  <p className="section-subtitle">
                    {t('about.howWeThink.text1')}
                  </p>
                  <p className="section-subtitle">
                    {t('about.howWeThink.text2')}
                  </p>
                  <p className="section-subtitle">
                    {t('about.howWeThink.text3')}
                  </p>
                </div>
              </div>
            </div>

            <div id="why-we-started" className="container-page">
              <div className="p-8 md:p-12">
                <div className="max-w-3xl">
                  <h2 className="section-title">
                    {t('about.whyWeStarted.title1')}{' '}
                    <span className="text-blue-600">
                      {t('about.whyWeStarted.title2')}
                    </span>
                  </h2>
                  <p className="section-subtitle">
                    {t('about.whyWeStarted.text1')}
                  </p>
                  <p className="section-subtitle">
                    {t('about.whyWeStarted.text2')}
                  </p>
                </div>
              </div>
            </div>

            <div id="what-makes-us-different" className="container-page">
              <div className="surface p-8 shadow-sm md:p-12">
                <div className="max-w-3xl">
                  <h2 className="section-title">
                    {t('about.whatMakesUsDifferent.title1')}{' '}
                    <span className="text-blue-600">
                      {t('about.whatMakesUsDifferent.title2')}
                    </span>
                  </h2>
                  <ul className="section-subtitle list-disc">
                    <li>
                      <span className="font-bold">
                        {t('about.whatMakesUsDifferent.point1.title')}
                      </span>
                      {' - '}
                      {t('about.whatMakesUsDifferent.point1.text')}
                    </li>

                    <li>
                      <span className="font-bold">
                        {t('about.whatMakesUsDifferent.point2.title')}
                      </span>
                      {' - '}
                      {t('about.whatMakesUsDifferent.point2.text')}
                    </li>

                    <li>
                      <span className="font-bold">
                        {t('about.whatMakesUsDifferent.point3.title')}
                      </span>
                      {' - '}
                      {t('about.whatMakesUsDifferent.point3.text')}
                    </li>

                    <li>
                      <span className="font-bold">
                        {t('about.whatMakesUsDifferent.point4.title')}
                      </span>
                      {' - '}
                      {t('about.whatMakesUsDifferent.point4.text')}
                    </li>

                    <li>
                      <span className="font-bold">
                        {t('about.whatMakesUsDifferent.point5.title')}
                      </span>
                      {' - '}
                      {t('about.whatMakesUsDifferent.point5.text')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="who-we-work-with" className="container-page">
              <div className="p-8 md:p-12">
                <div className="max-w-3xl">
                  <h2 className="section-title">
                    {t('about.whoWeWorkWith.title1')}{' '}
                    <span className="text-blue-600">
                      {t('about.whoWeWorkWith.title2')}
                    </span>
                  </h2>
                  <p className="section-subtitle">
                    {t('about.whoWeWorkWith.text1')}
                  </p>
                  <p className="section-subtitle">
                    {t('about.whoWeWorkWith.text2')}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <SectionCTA />
        </main>
      </div>
    </>
  );
}