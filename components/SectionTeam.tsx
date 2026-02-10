'use client';

import { useI18n } from '@/components/LanguageProvider';
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Link as HeroLink,
} from '@heroui/react';

type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  linkedinUrl?: string;
  email?: string;
};

type TeamCardProps = TeamMember & {
  t: (key: string) => string;
};

function TeamCard({
  name,
  role,
  imageSrc,
  imageAlt,
  linkedinUrl,
  email,
  t,
}: TeamCardProps) {
  return (
    <Card
      isFooterBlurred
      shadow="none"
      className={[
        'group w-full overflow-hidden border border-black/10 bg-white',

        'aspect-3/4 sm:aspect-4/5 lg:aspect-3/4',

        'rounded-2xl transition-transform duration-300 hover:-translate-y-1',
      ].join(' ')}
    >
      {/* IMAGE */}
      <Image
        removeWrapper
        alt={imageAlt}
        src={imageSrc}
        className="h-full w-full object-cover"
      />

      {/* TOP OVERLAY */}
      <CardHeader className="absolute inset-x-0 top-0 z-10 flex-col items-start gap-1 p-4 sm:p-5">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/65 via-black/15 to-transparent" />
        <div className="relative">
          <p className="text-xs font-semibold tracking-wide text-white/80 uppercase">
            {role}
          </p>
          <h4 className="text-lg font-semibold text-white sm:text-xl">
            {name}
          </h4>
        </div>
      </CardHeader>

      {/* FOOTER OVERLAY */}
      <CardFooter className="absolute inset-x-0 bottom-0 z-10 border-t border-white/15 bg-black/35 backdrop-blur-md">
        <div className="flex w-full items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4">
          <div className="min-w-0">
            <p className="text-xs text-white/80">{t('team.connect')}</p>
            <p className="truncate text-xs text-white/60">
              {t('team.connectHint')}
            </p>
          </div>

          <div className="flex shrink-0 gap-2">
            {linkedinUrl && (
              <Button
                as={HeroLink}
                href={linkedinUrl}
                isExternal
                radius="full"
                size="sm"
                className="bg-white/15 text-white hover:bg-white/25"
              >
                LinkedIn
              </Button>
            )}

            {email && (
              <Button
                as={HeroLink}
                href={`mailto:${email}`}
                radius="full"
                size="sm"
                className="bg-white/15 text-white hover:bg-white/25"
              >
                Email
              </Button>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function SectionTeam() {
  const { t } = useI18n();

  const team: TeamMember[] = [
    {
      name: 'Tristan Jerin',
      role: t('team.member1.role'),
      imageSrc: '/img/tristan.png',
      imageAlt: 'Team member 1',
      linkedinUrl: 'https://www.linkedin.com/in/tristan-jerin-06981a203/',
      email: 'tristan@3comp.si',
    },
    {
      name: 'Gašper Golja',
      role: t('team.member2.role'),
      imageSrc: '/img/gasper.png',
      imageAlt: 'Team member 2',
      linkedinUrl: 'https://www.linkedin.com/in/ga%C5%A1per-golja-960604276/',
      email: 'gasper@3comp.si',
    },
    {
      name: 'Jan De Stupica',
      role: t('team.member3.role'),
      imageSrc: '/img/jan.png',
      imageAlt: 'Team member 3',
      linkedinUrl:
        'https://www.linkedin.com/in/jan-bo%C5%A1tjan-de-stupica-153546178/',
      email: 'jan@3comp.si',
    },
  ];

  return (
    <section id="team" className="section">
      <div className="container-page">
        <h2 className="section-title">
          {t('team.title.prefix')}{' '}
          <span className="text-blue-600">{t('team.title.highlight')}</span>
        </h2>
        <p className="section-subtitle">{t('team.subtitle')}</p>

        {/* better spacing and responsive columns */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={member.name} {...member} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
